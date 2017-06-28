import ajax from 'vendors/ajax'
import { getUrlParam, delUrlParam } from 'utils/url'

const oauth = scope =>
  ajax
    .post('/wechat/oauth', { url: window.location.href, scope })
    .then(({ url }) => window.location.replace(url))

const getToken = (code, callback) =>
  ajax
    .post('/wechat/token', { code })
    .then((res) => {
      localStorage.setItem('wx_token', JSON.stringify(res))
      callback(res)
    })
    .catch(() => window.location.replace(delUrlParam(window.location.href, 'code')))

export default (scope = 'snsapi_base', callback) => {
  const code = getUrlParam('code')
  if (!code) oauth(scope)
  else getToken(code, callback)
}
