import { getUrlParam } from 'url'
import wechat from 'vendors/wechat'

const openid = getUrlParam('openId')

if (openid) {
  import('./main').then(({ default: loadModule }) => loadModule(openid))
} else {
  wechat(
    ({ openid } = {}) => import('./main').then(({ default: loadModule }) => loadModule(openid))
  )
}


