var isEmptyData = require('./isEmptyData.js')
var clone = require('./clone.js')
var getType = require('./getType.js')

/**
 * 去除对应key值为空的数据，返回新对象
 * @param {Object} json # 需要处理的json数据
 * @return {Object} 
 */
function removeEmptyKey (json) {
	if(getType(json)!='Object') return {};
	var res = {};
	for(var key in clone(json)) {
		if(!isEmptyData(json[key])) {
			res[key] = json[key]
		}
	}
	return res;
}

module.exports = removeEmptyKey