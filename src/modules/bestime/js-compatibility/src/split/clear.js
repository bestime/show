

var getType = require('./getType.js')
var each = require('./each.js')
var clone = require('./clone.js')
var isEmptyData = require('./isEmptyData.js')

function clearObj (obj) {
	var res = {}
	for(var key in obj) {
		!isEmptyData(obj[key]) && (res[key] = clone(obj[key]));
	}
	return res
}

function clearArr (arr) {
	var res = []
	each(arr, function (item) {
		!isEmptyData(item) && res.push(clone(item))
	})
	return res
}



/**
 * 排除空值，返回克隆后的数据
 * @param {*} data 需要排除空值得数据 
 */

function clear (data) {
	switch(getType(data)) {
		case 'Object': return clearObj(data);
		case 'Array': return clearArr(data);
		default: return '';
	}
}

module.exports = clear