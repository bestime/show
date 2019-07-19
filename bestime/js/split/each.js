/**
 * 循环
 * 结束循环 -> 在each中return true
 */
import _Function from './_Function'
 

export default function each (arr, callback) {
	// 如果callback返回true就结束循环
	for(var index = 0; index < arr.length; index++) {
		if(_Function(callback)(arr[index], index)) {
			return false;
		}
	}
}

