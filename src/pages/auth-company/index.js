import './style'
import { hasClass, addClass, removeClass } from 'utils/dom'
import ajax from 'vendors/ajax'

const input = document.querySelector('.input')
const submit = document.querySelector('.submit')
const isDisabled = 'is-disabled'

input.addEventListener('input', ({ currentTarget }) => {
  if (currentTarget.value) {
    removeClass(submit, isDisabled)
  } else {
    addClass(submit, isDisabled)
  }
})

submit.addEventListener('click', ({ currentTarget }) => {
  if (hasClass(currentTarget, isDisabled)) return
  ajax
    .post('/company/search/', { name: currentTarget.value })
    .then((res) => {
      localStorage.setItem('id', res.id)
      localStorage.setItem('logo', res.logo)
      localStorage.setItem('name', res.name)
      window.location.href = 'auth-accout.html'
    })
    .catch(() => alert('查找的企业不存在，请重新输入'))
})
