import './style'
import jumbotron from 'images/auth-jumbotron.png'
import { hasClass, addClass, removeClass, render } from 'utils/dom'
import { redirect } from 'utils/url'
import ajax from 'vendors/ajax'


const bindAccount = (token, company_name, username, password) =>
  ajax
    .put('/wechat/binding-info/', {
      token,
      company_name,
      username,
      password,
    })
    .then(() => redirect('auth-binded.html'))
    .catch(({ response: { status } } = {}) => {
      switch (status) {
      case 401:
        alert('该微信已绑定')
        break
      case 404:
        alert('用户不存在')
        break
      default:
        alert('工号或密码不正确')
      }
    })


const renderComponent = (logo, name) =>
  render({
    element: '#app',
    component: `
      <img class="jumbotron" src="${jumbotron}" />
      <div class="card-wrapper">
        <div class="card">
          ${logo ? `<img class="logo" src="${logo}" width="60" alt="公司logo" />` : ''}
          <p class="company">${name}</p>
          <input class="username" placeholder="个人帐号" ／>
          <input class="password" placeholder="密码" ／>
          <button class="submit is-disabled">确定绑定</button>
        </div>
      </div>
    `,
  })


const registerEventListener = (token, company_name) => {
  const $username = document.querySelector('.username')
  const $password = document.querySelector('.password')
  const $submit = document.querySelector('.submit')
  const isDisabled = 'is-disabled'

  const onInput = () => {
    if ($username.value && $password.value) {
      removeClass($submit, isDisabled)
    } else {
      addClass($submit, isDisabled)
    }
  }
  $username.addEventListener('input', onInput)
  $password.addEventListener('input', onInput)

  $submit.addEventListener('click', () => {
    if (hasClass($submit, isDisabled)) return
    bindAccount(token, company_name, $username.value, $password.value)
  })
}


export default ({ companyLogo, companyName, token } = {}) => {
  const logo = companyLogo ? `data:image;base64,${companyLogo}` : null
  renderComponent(logo, companyName)
  registerEventListener(token, companyName)
}
