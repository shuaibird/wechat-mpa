import wechat from 'vendors/wechat'

wechat(
  () => import('./main').then(({ default: loadModule }) => loadModule()),
  'snsapi_userinfo'
)
