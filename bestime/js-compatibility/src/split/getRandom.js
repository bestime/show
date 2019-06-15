/**
 * @desc 上一版比较臃肿，部分功能多余。
 * @notice 此为闭合区间
 * @param  {Number} min 最小数
 * @param  {Number} max 最大数
 * @return {Number}
 */
function getRandom (min, max) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;    
}

module.exports = getRandom