import './style'
import jumbotron from 'images/auth-jumbotron.png'
import logo from 'images/logo.png'
import ajax from 'vendors/ajax'
import { hasClass, addClass, removeClass, render } from 'utils/dom'
import { redirect } from 'utils/url'

const searchCompany = name =>
  ajax
    .post('/company/search/', { name })
    .then(({ data: { id, logo, name } }) => {
      localStorage.setItem('id', id)
      localStorage.setItem('logo', logo)
      localStorage.setItem('name', name)
      redirect('auth-account.html')
    })
    .catch(() => alert('查找的企业不存在，请重新输入'))


const renderComponent = () =>
  render({
    element: '#app',
    component: `
      <img class="jumbotron" src="${jumbotron}" />
      <div class="card-wrapper">
        <div class="card">
          <img class="logo" src="${logo}" width="80" alt="Tox" />
          <p class="slogan">Tox 智能会议系统</p>
          <input class="input" placeholder="公司名称" />
          <button class="submit is-disabled">下一步</button>
        </div>
      </div>
    `,
  })

const registerEventListener = () => {
  const $input = document.querySelector('.input')
  const $submit = document.querySelector('.submit')
  const isDisabled = 'is-disabled'

  $input.addEventListener('input', () => {
    if ($input.value) {
      removeClass($submit, isDisabled)
    } else {
      addClass($submit, isDisabled)
    }
  })

  $submit.addEventListener('click', () => {
    if (hasClass($submit, isDisabled)) return
    searchCompany($input.value)
  })
}


export default () => {
  renderComponent()
  registerEventListener()
}
