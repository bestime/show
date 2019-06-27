import getType from './getType'
const name = 'Boolean'

export default function _Boolean (data, def) {
  const temp = getType(def) === name ? def : false
  return getType(data) === name ? data : temp
}