/**
 * 根据自自定义名称解除click绑定
 * 
 * @param {Object} oDom 
 * @param {String} name 
 */

var each = require('./each')
var unbind = require('./unbind')

function unclick (oDom, name) {
    var arr = ['click', 'touchstart', 'touchmove', 'touchend'];
    each(arr, function (item) {
        unbind(oDom, name, item);
    })
}

module.exports = unclick