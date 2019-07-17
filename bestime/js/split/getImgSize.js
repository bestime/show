/**
 * 获取图片原始尺寸
 * onload 要在 img.src 赋值前
 * 
 * @param src              图片链接
 * @param callback(json)   回调函数
 */

import _Function from './_Function'
function getImgSize (src, callback) {
	var oImg = document.createElement('img'); 

	oImg.onload = function () {
		_Function(callback)({
			src: src,
			width: oImg.width,
			height: oImg.height
		})
	};

	oImg.src = src;
}

export default getImgSize