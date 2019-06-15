import isObject from './split/isObject'

export default function checkJCY () {
  if (isObject(window.jcy)) {
    return window.jcy
  } else {
    window.jcy = {}
  }
}