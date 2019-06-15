/**
 * 获取当前下标的下一个、上一个下标
 * @param {Array} arr 目标数组
 * @param {Number} currentIndex 当前索引
 * @return {Object}
 */
function getAroundIndex (arr, currentIndex) {
    var pre = currentIndex - 1;
    var next = currentIndex + 1;
    if(currentIndex==0) {
        pre = arr.length - 1;
        next = currentIndex + 1;
    }else if(currentIndex == arr.length-1) {
        pre = currentIndex - 1;
        next = 0;
    }

    return {
        pre: pre,
        current: currentIndex,
        next: next
    }
}

module.exports = getAroundIndex