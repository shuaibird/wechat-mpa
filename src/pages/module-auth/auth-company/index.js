import wechat from 'utils/wechat'

wechat(
  () => import('./main').then(({ default: loadModule }) => loadModule()),
  'snsapi_userinfo'
)
