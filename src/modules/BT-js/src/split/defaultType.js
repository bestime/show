/**
 * 循环
 * 结束循环 -> 在each中return true
 */
const getType = require('./getType')
function defaultType(typeName, data, defaultVal) {
	var res = null;
	var flag = false; // 是否有这个类型
	if (getType(data) != typeName) {
		flag = true;
		switch (typeName) {
			case 'Function': res = function () { }; break;
			case 'String': res = ''; break;
			case 'Object': res = {}; break;
			case 'Array': res = []; break;
			case 'Boolean': res = true; break;
			case 'Number': res = 0; break;
			default: flag = false; break;
		}
	}
	return !flag ? data : (getType(defaultVal) != 'Undefined' ? defaultVal : res);
}

module.exports = defaultType