import getType from './getType'
const name = 'Array'

export default function _Array (data, def) {
  const temp = getType(def)===name ? def : []
  return getType(data)===name ? data : temp
}