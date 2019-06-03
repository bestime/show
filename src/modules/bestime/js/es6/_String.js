import getType from './getType'
const name = 'String'

export default function _String (data, def) {
  const temp = getType(def)===name ? def : ''
  switch (getType(data)) {
    case 'Number': data = String(data); break;
  }
  return getType(data)===name ? data : temp
}