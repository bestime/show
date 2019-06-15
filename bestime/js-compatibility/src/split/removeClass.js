/**
 * 移除class
 * @param {object} element # dom元素 
 * @param {String || Array} cl # 需要移除的className。可接受单个字符串或数组 
 */

const getType = require('./getType.js')
const hasClass = require('./hasClass.js')
const trim = require('./trim.js')
const each = require('./each.js')
const unique = require('./unique.js')

function removeClass (element, cl) {
    if(getType(cl)=='Array') {
        each((unique(cl)), function (_item) {
            removeOne(_item)
        });
    }else {
        removeOne(cl);
    }
    
    function removeOne(cl) {
        if (hasClass(element, cl)){
            var reg = new RegExp('(\\s|^)' + cl + '(\\s|$)', 'g');
            element.className = trim(element.className.replace(reg, ' '));
        }  
    }        
}

module.exports = removeClass