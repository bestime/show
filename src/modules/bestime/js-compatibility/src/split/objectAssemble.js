
var defaultType = require('./defaultType.js')
var clone = require('./clone.js')

/**
 * 合并json 返回新数据
 */
function objectAssemble () {
	var res = {}
	for(var a=0; a<arguments.length; a++) {
		var one = defaultType('Object', arguments[a])
		for(var key in one) {
      if(!isEmptyData(one[key])) {
        res[key] = clone(one[key])
      }
		}
	}
	return res
}

module.exports = objectAssemble