const removeClass = require('./removeClass.js')
const addClass = require('./addClass.js')
const hasClass = require('./hasClass.js')

/**
 * class切换，有则删，无则加
 * 
 * @param {object} obj # dom元素 
 * @param {string} className # 类名
 */
function toggleClass (obj, className) {
	if(hasClass(obj, className)) {
		removeClass(obj, className);
	}else {
		addClass(obj, className)
	}
}

module.exports = toggleClass