import { isoDate } from './iso'

const today = new Date()
const todayStr = today.toDateString()
const tomorrow = new Date(today.setDate(today.getDate() + 1))
const tomorrowStr = tomorrow.toDateString()

export default dateStr => {
  const date = new Date(dateStr)
  switch(date.toDateString()) {
  case todayStr:
    return '今天'
  case tomorrowStr:
    return '明天'
  default:
    return isoDate(date)
  }
}
