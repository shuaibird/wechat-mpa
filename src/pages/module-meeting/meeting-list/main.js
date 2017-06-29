import './style'
import ajax from 'vendors/ajax'
import { redirect } from 'utils/url'

const limit = 5
let offset = 0

const fetchList = openid => {
  if (offset && ((window.scrollY + window.innerHeight) < document.body.scrollHeight)) return
  if (offset) window.removeEventListener('scroll', fetchList)
  ajax
    .get('/wechat/my-meetings/', { params: { openid, limit, offset } })
    .then(({ data }) => {
      if (!data.count) {
        import('./render-empty').then(({ default: loadModule }) => loadModule())
        return
      }

      offset += limit
      if (offset <= data.count) {
        window.addEventListener('scroll', fetchList)
      }
      import('./render-list').then(({ default: loadModule }) => loadModule(data.results, openid))
    })
    .catch(({ response: { status } } = {}) => {
      if (status === 404) redirect('auth-company.html')
    })
}

export default openid => fetchList(openid)
