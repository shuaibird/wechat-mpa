export default ({ html, container } = {}) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = html
  document.querySelector(container).innerHTML = wrapper
}
