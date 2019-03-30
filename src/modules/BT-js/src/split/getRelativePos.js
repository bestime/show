const getScrollPosition = require('./getScrollPosition.js')

//获取元素相对窗口的距离
function getRelativePos(el) {
	var scrollPos = getScrollPosition();
	const bound = el.getBoundingClientRect()
	return {
		x: bound.left + scrollPos.left,
		y: bound.top + scrollPos.top,
		height: el.offsetHeight,
		width: el.offsetWidth,
		clientWidth: el.clientWidth,
		clientHeight: el.clientHeight
	};
}

module.exports = getRelativePos
