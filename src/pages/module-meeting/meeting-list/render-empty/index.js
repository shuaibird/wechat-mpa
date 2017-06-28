import './style'
import bgImg from './meeting-list-empty.png'
import { render } from 'utils/dom'

export default () => {
  render({
    element: '#app',
    component: `
      <div class="meeting--empty">
        <img src="${bgImg}" width="200" height="110" />
        <div>无会议安排</div>
      </div>
    `,
  })
}
