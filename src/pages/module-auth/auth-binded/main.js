import './style'
import jumbotron from 'images/auth-jumbotron.png'
import tick from './tick.png'
import { render } from 'utils/dom'
import ajax from 'vendors/ajax'

const unbindAccount = openid =>
  ajax
    .delete('/wechat/binding-info/', { params: { openid } })
    .then(() => WeixinJSBridge.invoke('closeWindow', {}, () => localStorage.clear()))
    .catch(() => alert('解绑失败'))


const renderComponent = (logo, company, user) =>
  render({
    element: '#app',
    component: `
      <img class="jumbotron" src="${jumbotron}" />
      <div class="tip">
        <img class="icon" src="${tick}" width="23" alt="tick" />
        <span class="text">已绑定</span>
      </div>
      <div class="card-wrapper">
        <div class="card">
          ${logo ? `<img class="logo" src="${logo}" width="60" alt="公司logo" />` : ''}
          <p class="company">${company}</p>
          <p class="user">${user}</p>
          <button class="unbind">解绑</button>
        </div>
      </div>
    `,
  })


const registerEventListener = openid => {
  const $button = document.querySelector('.unbind')
  $button.addEventListener('click', () => {
    if (!confirm('是否解绑帐号？')) return
    unbindAccount(openid)
  })
}


export default ({ openid, logo, company, user } = {}) => {
  renderComponent(logo, company, user)
  registerEventListener(openid)
}
