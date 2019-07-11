/**
 * 循环
 * 结束循环 -> 在each中return true
 */

const getType = require('./getType')
const _Function = require('./_Function')
 

function each (arr, callback) {
	if(getType(arr)!='Array') return ;
	// 如果callback返回true就结束循环
	for(var index = 0; index < arr.length; index++) {
		if(_Function(callback)(arr[index], index)) {
			return false;
		}
	}
}

module.exports = each

