var getType = require('./getType')
var name = 'Array'

module.exports = function () {
  const temp = getType(def) === name ? def : []
  return getType(data) === name ? data : temp  
}
