var each = require('./each.js')
var clone = require('./clone.js')
var isEmptyData = require('./isEmptyData.js')

/**
 * 提取数组中含有key的数据
 * @param {Array} arr # 原数组，格式为json数组
 * @param {String} key # 查找的key
 * @param {*} val # [可选] 只查找key的值等于val的数据。不填返回所有
 * @param {String} indexKey # [可选] 会将查找的数据中插入一个字段表示查找到的索引，默认为index
 * @return {Array} 返回新的数组，不影响原数组，无结果返回空数组
 */
function getFromArrByKey(arr, key, val, indexKey) {
	var isVal = isEmptyData(val);
	indexKey = indexKey || 'index';
	var res = [];
	each(clone(arr), function (item, index) {
		for(var k in item) {
			if(k==key) {
				item[indexKey] = index
				if(!isVal) {
					if(item[key]==val) {						
						res.push(item);
					}
				}else {
					res.push(item);
				}				
			}
		}
	});
	return res;
}

module.exports = getFromArrByKey;