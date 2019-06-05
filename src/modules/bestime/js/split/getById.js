import isString from './isString'
export default function getById (id) {
  return isString(id) ? document.getElementById(id) : null
}