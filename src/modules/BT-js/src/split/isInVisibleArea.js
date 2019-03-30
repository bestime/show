const getRelativePos = require('./getRelativePos.js')
const getWindowSize = require('./getWindowSize.js')

/**
 * 判断是否在可视区域
 * @param {obj}       el         # 监听对象
 * @param {boolean}   isAllIn    # [默认值：false] false: 边缘进入可视区域；true: 整体进入可视区域
 * @param {Number}    deviant    # [默认值：0] 偏移值。提前或者延后判断进入可是区域
 */
function isInVisibleArea (el, isAllIn, deviant) {		
    deviant = deviant || 0;
    isAllIn = isAllIn || false;
    
    var _max = getWindowSize().height + deviant;
    var _min = - (el.offsetHeight + deviant);		
    
    if(isAllIn) {
        _max = _max -  el.offsetHeight;
        _min = _min + el.offsetHeight;
    }
    
    var top = getRelativePos(el).y;
    
    if(top>=_min && top<=_max) {
        return true;
    }else {
        return false;
    }
}

module.exports = isInVisibleArea