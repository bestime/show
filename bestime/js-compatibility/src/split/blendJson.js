
var defaultType = require('./defaultType.js')
var isEmptyData = require('./isEmptyData.js')

/**
 * 合并对象
 * @param {Object} target 被合并的对象
 * @param {Objec} source 要筛选的对象
 * @param {Array || empay} keys 需要合并的key。可为空。默认合并所有数据
 * @param {Boolean} isGetNewData 是否返回一个新数据，默认返回第一个参数的数据。true: 返回拷贝的数据
 */
function blendJson(target, source, keys, isGetNewData) {
	keys = defaultType('Array', keys);
	if(!isEmptyData(keys)) {
		for (var a = 0; a < keys.length; a++) {
			source[keys[a]] ? target[keys[a]] = source[keys[a]] : null;
		}
	}else {
		for(var k in source) {
			target[k] = source[k]
		}
	}	
	return isGetNewData ? isGetNewData(target) : target;
}

module.exports = blendJson