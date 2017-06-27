export const hasClass = (element, className) =>
  element.classList.contains(className)

export const addClass = (element, className) => {
  if (!hasClass(element, className)) element.classList.add(className)
}

export const removeClass = (element, className) => {
  element.classList.remove(className)
}
