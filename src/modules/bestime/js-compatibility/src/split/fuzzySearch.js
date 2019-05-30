/**
 * 模糊查询
 * @param {String} searchText 需要查询的字符串
 * @param {String} sourceText 数据源
 */

var defaultType = require('./defaultType')

function fuzzySearch (searchText, sourceText) {
	var reg = new RegExp(searchText.replace(/(.)/g, '($1)|').replace(/.$/, ''), 'g')
	return defaultType('Array', sourceText.match(reg))
}

module.exports = fuzzySearch