/**
 * 随机生成颜色
 * 支持模式：
 *   hex  不支持透明度
 *   hsla id6-8不支持
 *   rgba
 * @param {String} type 
 * @param {Boolean | Number} alpha [默认：false]:是否随机生成透明度
 */


const isEmptyData = require('./isEmptyData.js')
const getType = require('./getType.js')
const getRandom = require('./getRandom.js')

function getRandomColor (type, alpha) {
    var result = '';

    if(type=='hex') {
        result = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
    }else {
        var alphaValue = 0;    
        alpha = isEmptyData(alpha) ? false : alpha;        
        if(getType(alpha)=='Boolean') {
            alphaValue = alpha ? (getRandom(0, 100)/100) : 1;
        }else {
            alphaValue = alpha;
        }

        if(type=='hsla') {
            result = 'hsla('+ getRandom(0, 360) +', '+ getRandom(0, 100) +'%, '+ getRandom(0, 100) +'%, '+ alphaValue +')';
        }else if(type=='rgba') {
            result = 'rgba('+ getRandom(0, 255) +', '+ getRandom(0, 255) +', '+ getRandom(0, 255) +', '+ alphaValue +')';
        }
    }

    return result;
}

module.exports = getRandomColor