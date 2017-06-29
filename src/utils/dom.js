export const hasClass = (element, className) =>
  element.classList.contains(className)

export const addClass = (element, className) => {
  if (!hasClass(element, className)) element.classList.add(className)
}

export const removeClass = (element, className) => {
  element.classList.remove(className)
}

export const render = ({ element, component, operation } = {}) => {
  console.log(component)
  const collapsedComponent = component.replace(/\n/g, '').replace(/>[ ]+</g, '><')
  const container = (typeof element === 'string') ? document.querySelector(element) : container
  switch (operation) {
  case 'append':
    container.innerHTML += collapsedComponent
    break
  case 'prepend':
    container.innerHTML = collapsedComponent + container.innerHTML
    break
  default:
    container.innerHTML = collapsedComponent
  }
}
