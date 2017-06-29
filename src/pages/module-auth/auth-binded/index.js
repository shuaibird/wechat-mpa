import wechat from 'vendors/wechat'
import ajax from 'vendors/ajax'
import { redirect } from 'utils/url'

wechat(
  ({ openid } = {}) =>
    ajax
      .get('/wechat/binding-info/', { params: { openid } })
      .then(({ data: { company: { logo, name }, user: { username } } }) =>
        import('./main')
          .then(({ default: loadModule }) =>
            loadModule({
              openid,
              logo: logo ? `data:image;base64,${logo}` : null,
              company: name,
              user: username,
            })
          )
      )
      .catch(({ response: { status } } = {}) => {
        if (status === 404) {
          redirect('auth-company.html')
        } else {
          alert('获取用户信息失败')
        }
      })
)
