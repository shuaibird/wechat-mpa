import wechat from 'utils/wechat'

wechat(
  ({ openid } = {}) => import('./main').then(({ default: loadModule }) => loadModule(openid))
)
