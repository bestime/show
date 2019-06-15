/**
 * 兼容PC和移动端的点击事件，解决移动端300ms延迟
 * 
 * @param {Object} oDom 
 * @param {String} name 自定义名字，解绑需要这个名字
 * @param {Function} handler 事件处理函数
 * @param {Number} maxPressTime 最大按压时间，按压时间过长，视为无效点击
 */

var getType = require('./getType')
var bind = require('./bind')

function click(oDom, name, handler, maxPressTime) {
	// 点击过程中，移动距离超过这个值，将视为无效的点击操作
	var DRAG_THRESHOLD = 10;

	var isSupportTouch = "ontouchstart" in document ? true : false;

	// 按压时间操作这个值视为无效点击操作
	maxPressTime = getType(maxPressTime) == 'Number' ? maxPressTime : 2000;

	var startTime;
	var pressTime;
	var startX;
	var startY;
	var endX;
	var endY;

	// 处理 pc 端 click
	if (!isSupportTouch) {
		bind(oDom, name, 'click', handler);
	}

	// 处理移动端 click
	bind(oDom, name, 'touchstart', function (e) {
		var ev = e || event;
		startTime = +new Date();
		endX = startX = ev.touches[0].clientX;
		endY = startY = ev.touches[0].clientY;
	});

	bind(oDom, name, 'touchmove', function (e) {
		var ev = e || event;
		endX = ev.touches[0].clientX;
		endY = ev.touches[0].clientY;
	});

	bind(oDom, name, 'touchend', function () {
		pressTime = +new Date() - startTime;
		if (Math.abs(endX - startX) <= DRAG_THRESHOLD && Math.abs(endY - startY) < DRAG_THRESHOLD && pressTime < maxPressTime) {
			handler.call(oDom);
		}
	});
}

module.exports = click