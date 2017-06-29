import './style'
import iconHost from './icon-host.svg'
import iconLocation from './icon-location.svg'
import bgHost from './bg-host.svg'
import bgParticipant from './bg-participant.svg'
import { render } from 'utils/dom'
import convertDate from 'utils/convertDate'
import { isoTime } from 'utils/iso'

export default (list = [], openid) =>
  render({
    element: '#app',
    operation: 'append',
    component: list.reduce((acc, cur = {}) => {
      const meeting = `
        <a href="meeting-detail.html?openId=${openid}&meetingId=${cur.meetingId}" class="meeting meeting--${cur.action}">
          <div class="meeting__title">${convertDate(cur.createdAt)}</div>
          <div class="meeting__subtitle">${isoTime(cur.createdAt)}-${isoTime(cur.meetingEndAt)}</div>
          <div class="meeting__content">${cur.meetingName}</div>
          <div class="meeting__footer">
            <div>
              <img src="${iconHost}" />
              <span>${cur.hostName}</span>
            </div>
            <div>
              <img src="${iconLocation}" />
              <span>${cur.roomName}</span>
            </div>
          </div>
          <div class="meeting__label">我${cur.action === 'host' ? '主持' : '参加'}</div>
          <img class="meeting__bg" src="${ cur.action === 'host' ? bgHost : bgParticipant }" />
        </a>
      `
      return acc + meeting
    }, ''),
  })
