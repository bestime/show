/**
 * 循环
 * 结束循环 -> 在each中return true
 */
const defaultType = require('./defaultType')
function each (arr, callback) {
	try {
		arr.length
	} catch (e) {
		return;
	}
	var len = arr.length;
	// 如果callback返回true就结束循环
	for(var index = 0; index < len; index++) {
		if(defaultType('Function', callback)(arr[index], index)) {
			return false;
		}
	}
}

module.exports = each