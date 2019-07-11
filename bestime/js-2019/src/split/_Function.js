const getType = require('./getType')
function emptyFunction () {}
const name = 'Function'


module.exports = function (data, def) {
  const tempFun = getType(def) === name ? def : emptyFunction
  return getType(data)===name ? data : tempFun
}