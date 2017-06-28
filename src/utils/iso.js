const iso = (date) => {
  const d = (typeof date === 'string') ? new Date(date) : date
  return new Date(d.getTime() - (d.getTimezoneOffset() * 60000)).toISOString()
}

// yyyy-mm-dd
export const isoDate = (date, delimiter) => {
  let result = iso(date).slice(0, 10)
  if (delimiter) {
    result = result.split('-').join(delimiter)
  }
  return result
}

// hh:mm
export const isoTime = date => iso(date).slice(11, 16)
