var each = require('./each.js')
var split = require('./split.js')

/**
 * getQuery 获取url查询参数
 * @param {String} searchStr # [可选], 被查询的字符串，不填则为浏览器地址
 * @return {Object | String} json对象
 */
function getQuery (searchStr) {
	var res = {};
	var webHref = ''
	try { webHref = window.location.href } catch(e) {}
	searchStr = searchStr || webHref
	searchStr = searchStr.match(/\?.*$/g);
	searchStr = searchStr ? searchStr[0].replace('?', '') : '';
	each(split(searchStr, '&'), function (item) {
		var one = split(item, '=');
		res[one[0]] = decodeURIComponent(one[1]);
	});
	return res;
}

module.exports = getQuery