



/**
 * getQuery 获取url查询参数
 * @param {String} searchStr # [可选], 被查询的字符串，不填则为浏览器地址
 * @return {Object | String} json对象
 */



const split = require('./split')
const each = require('./each')
function getQuery (searchStr) {	
	var webHref = ''; try { webHref = window.location.href } catch(e) {}

	let useStr = ''
	each((searchStr || webHref).match(/\?[^?]*(?=(\?)?)/g), function (item) {
		useStr += item.replace(/^\?|\?/, '&')
	})

	var res = {};
	each(split(useStr, '&'), function (item) {
		var one = split(item, '=');
		if(one[0]) {
			res[one[0]] = decodeURIComponent(one[1].replace(/#.*/g, ''));
		}		
	});
	return res;
}

module.exports = getQuery
