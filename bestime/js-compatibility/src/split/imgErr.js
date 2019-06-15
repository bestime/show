/**
 * 处理错误图片
 * 
 * @param {Dom} oImg 图片元素
 * @param {Array} imgArr 待选图片数组 
 */


var defaultType = require('./defaultType')

function imgErr (oImg, imgArr) {
  imgArr = defaultType('Array', imgArr)
  if(!oImg || !imgArr.length) return;
  oImg.errIdx = oImg.errIdx || 0;  
  
  // 加载成功后将index重置，不然vue中使用会有 bug
  !oImg.onload && (oImg.onload = function () {
    oImg.errIdx = 0;
  });
  
  // 尝试使用一个图片地址
  if(oImg.errIdx < imgArr.length) {
    oImg.src = imgArr[oImg.errIdx];
    oImg.errIdx = oImg.errIdx + 1;
  }
}

module.exports = imgErr