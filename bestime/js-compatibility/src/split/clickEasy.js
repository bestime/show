/**
 * 用于绑定后不用取消
 * bind的简化版
 */


var click = require('./click')

function clickEasy (oDom, handler, maxPressTime) {
    click(oDom, 'n', handler, maxPressTime);
}

module.exports = clickEasy