/**
 * 字符串转数组，空字符串转为空数组（原生方法会将空字符串转成长度为1的数组，不好用）
 * @param str {String} 需要转的字符串
 * @param flag {String} 需要分隔的标识符
 */
var isEmptyData = require('./isEmptyData')
var getType = require('./getType')
function split (str, flag) {
	str = getType(str)=='Number' ? String(str) : str
	if(getType(str)!='String') {
		return []
	}else {
		return !isEmptyData(str) ? str.split(flag) : []
	}
}

module.exports = split