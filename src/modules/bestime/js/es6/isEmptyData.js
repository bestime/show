import getType from './getType'

/**
 * 判断一个数据是否为空
 * @param {All} data 需要处理的数据
 * @return {Boolean}
 */
export default function isEmptyData (data) {	
	switch(getType(data)) {
		case 'Object':
			for(var key in data) return false
			return true
		case 'Array': return !data.length
		case 'Boolean': return false
		case 'Number': return false
		case 'String': return data=='undefined' || data=='' ? true : false
		default: return !data
	}
}





/** 
 

var abcd = {}
console.log(isEmptyData({})) //true
console.log(isEmptyData([])) //true
console.log(isEmptyData('')) //true
console.log(isEmptyData(abcd.b)) //true
console.log(isEmptyData(null)) //true
console.log(isEmptyData(undefined)) //true

console.log(isEmptyData(false)) //false
console.log(isEmptyData(true)) //false
console.log(isEmptyData(0)) //false


 */
