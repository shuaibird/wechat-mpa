import wechat from 'utils/wechat'
import { redirect } from 'utils/url'

const token = JSON.parse(localStorage.getItem('wx_token'))
const companyLogo = localStorage.getItem('company_logo')
const companyName = localStorage.getItem('company_name')

if (!companyName) {
  localStorage.clear()
  redirect('auth-company.html')
} else {
  if (token) {
    import('./main').then(({ default: loadModule }) => loadModule({
      token,
      companyName,
      companyLogo,
    }))
  } else {
    wechat(
      token =>
        import('./main').then(({ default: loadModule }) => loadModule({
          token,
          companyName,
          companyLogo,
        })),
      'snsapi_userinfo'
    )
  }
}
