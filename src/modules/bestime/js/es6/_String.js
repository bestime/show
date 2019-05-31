import getType from './getType'
const name = 'String'
export default function _String (data, def) {
  const temp = getType(def)===name ? def : ''
  return getType(data)===name ? data : temp
}