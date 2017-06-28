export const redirect = uri => window.location.href = uri

export const getUrlParam = name => {
  const regex = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
  const param = window.location.search.substr(1).match(regex)
  return param ? unescape(param[2]) : null
}

export const delUrlParam = (url, name) =>
  url
    .replace(new RegExp(`${name}=([^&]*)(&|$)`), '')
    .replace(new RegExp('(\\?|&)$'), '')
