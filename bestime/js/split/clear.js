
import getType from './getType'
import clone from './clone'
import isEmpty from './isEmpty'
import each from './each'

function retain (data) {
	if(data==='') {
		return true
	}else {
		return !isEmpty(data)
	}
}

function clearObj (obj) {
	var res = {}
	for(var key in obj) {
		retain(obj[key]) && (res[key] = clone(obj[key]));
	}
	return res
}

function clearArr (arr) {
  var res = []
  each(arr, item => {
    retain && res.push(clone(item))
  })
	return res
}



/**
 * 排除空值，返回克隆后的数据
 * @param {*} data 需要排除空值得数据 
 */

export default function clear (data) {
	switch(getType(data)) {
		case 'Object': return clearObj(data);
		case 'Array': return clearArr(data);
		default: return '';
	}
}

