import wechat from 'vendors/wechat'

wechat(
  ({ openid } = {}) => import('./main').then(({ default: { loadModule } }) => loadModule(openid))
)
