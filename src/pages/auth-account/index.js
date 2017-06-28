import './style'
import { render } from 'utils/dom'

render({
  element: '.card-wrapper',
  component: `
    <div class="card">
      <img class="logo" src="" width="120" alt="公司logo" />
      <p class="company">{{ company }}</p>
      <input class="username" placeholder="个人账号" ／>
      <input class="password" placeholder="密码" ／>
      <button class="submit">确定绑定</button>
    </div>
  `,
})
