import getType from './getType'

function emptyFunction () {}
const name = 'Function'


export default function _Function (data, def) {
  const tempFun = getType(def) === name ? def : emptyFunction
  return getType(data)===name ? data : tempFun
}