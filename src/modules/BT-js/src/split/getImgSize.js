/**
 * 获取图片原始尺寸
 * onload 要在 img.src 赋值前
 * 
 * @param src              图片链接
 * @param callback(json)   回调函数
 */

const defaultType = require('./defaultType.js')
function getImgSize (src, callback) {
	var oImg = document.createElement('img'); 

	oImg.onload = function () {
		defaultType('Function', callback) ({
			src: src,
			width: oImg.width,
			height: oImg.height
		})
	};

	oImg.src = src;
}

module.exports = getImgSize