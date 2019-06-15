const getType = require('./getType.js')
const each = require('./each.js')
const hasClass = require('./hasClass.js')
const unique = require('./unique.js')


/**
 * 添加class
 * @param {object} element # dom元素 
 * @param {String || Array} addClassName # 需要增加的className。可接受单个字符串或数组 
 */
function addClass (obj, addClassName) {
    if(getType(addClassName)=='Array') {
        // 方法一, 将className转为数组，并合并新数组，并去重
        //obj.className = (ns.blendArr(obj.className.split(' '), addClassName, true)).join(' ');
        
        // 方法二
        each((unique(addClassName)), function (_item) {
            addOne(_item);
        });
    }else {
        addOne(addClassName);
    }
    
    function addOne(oneClassName) {
        if(!hasClass(obj, oneClassName)) {
            obj.className += (obj.className ? (' ' + oneClassName) : oneClassName);
        }
    }
}

module.exports = addClass