import './style'
import iconPrivate from './icon-private.svg'
import logoImg from 'images/logo-watermark.png'
import { isoDate, isoTime } from 'utils/iso'
import { getUrlParam } from 'utils/url'
import { render } from 'utils/dom'
import ajax from 'vendors/ajax'

/* eslint-disable */
const renderComponent = (meeting = {}) =>
  render({
    element: '#app',
    component: `
      <div class="meeting meeting--${meeting.role}">
        <div class="meeting__jumbotron">
          <div class="meeting__jumbotron__title">${isoDate(meeting.startAt)} ${isoTime(meeting.startAt)}</div>
          <div class="meeting__jumbotron__subtitle">${meeting.room.name}${meeting.room.location ? ` &middot ${meeting.room.location}` : ''}</div>
        </div>
        <div class="meeting__main">
          <div class="meeting__main__title">
            ${meeting.visibility === 'PRIVATE' ? `<img src="${iconPrivate}" />` : ''}
            <span>${meeting.topic}</span>
          </div>
          <div class="meeting__main__tag">
            ${meeting.tags.reduce((acc, cur = {}) => {
              const tag = `<div>${cur.tag}</div>`
              return acc + tag
            }, '')}
          </div>
          ${meeting.content ? `<div class="meeting__main__subtitle">${meeting.content}</div>` : ''}
          <div>
            <div class="meeting__main__section">
              <div class="head">
                <div class="text">主持人</div>
              </div>
              <div class="body">
                <span>${meeting.host.name}</span>
              </div>
            </div>
            <div class="meeting__main__section">
              <div class="head">
                <div class="text">参会人</div>
              </div>
              <div class="body">
                ${meeting.participants.reduce((acc, cur = {}) => {
                  const participant = `<span>${cur.name}</span>`
                  return acc + participant
                }, '')}
              </div>
            </div>
            ${meeting.foreigner.length ?
              `<div class="meeting__main__section">
                <div class="head">
                  <div class="text">外部参会人</div>
                </div>
                <div class="body">
                  ${meeting.foreigner.reduce((acc, cur) => {
                    const foreigner = '<span>' + cur + '</span>'
                    return acc + foreigner
                  }, '')}
                </div>
              </div>`
            : ''}
          </div>
          <div class="meeting__main__footer">
            <img src="${logoImg}" />
          </div>
        </div>
        <div class="meeting__mask"></div>
      </div>
    `,
  })
/* eslint-enable */

export default openid => {
  ajax
    .get(`/wechat/meetings/${getUrlParam('meetingId')}/?openid=${openid}`)
    .then(({ data }) => renderComponent(data))
}
