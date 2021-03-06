import { getUrlParam } from 'utils/url'
import wechat from 'utils/wechat'

const openid = getUrlParam('openId')

if (openid) {
  import('./main').then(({ default: loadModule }) => loadModule(openid))
} else {
  wechat(
    ({ openid } = {}) => import('./main').then(({ default: loadModule }) => loadModule(openid))
  )
}


