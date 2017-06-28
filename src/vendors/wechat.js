import ajax from 'vendors/ajax'
import { redirect, getUrlParam, delUrlParam } from 'utils/url'

const oauth = scope =>
  ajax
    .post('/wechat/oauth/', { url: window.location.href, scope })
    .then(({ data: { url } }) => redirect(url))

const getToken = (code, callback) =>
  ajax
    .post('/wechat/token/', { code })
    .then(({ data }) => {
      localStorage.setItem('wx_token', JSON.stringify(data))
      callback(data)
    })
    .catch(() => redirect(delUrlParam(window.location.href, 'code')))

export default (callback, scope = 'snsapi_base') => {
  const code = getUrlParam('code')
  if (!code) oauth(scope)
  else getToken(code, callback)
}
