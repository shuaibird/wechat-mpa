import './style'
import jumbotron from 'images/auth-jumbotron.png'
import { render } from 'utils/dom'

const renderComponent = () => render({
  element: '#app',
  component: `
    <img class="jumbotron" src="${jumbotron}" />
    <div class="card-wrapper">
      <div class="card">
        <img class="logo" src="" width="120" alt="公司logo" />
        <p class="company">{{ company }}</p>
        <input class="username" placeholder="个人账号" ／>
        <input class="password" placeholder="密码" ／>
        <button class="submit">确定绑定</button>
      </div>
    </div>
  `,
})
