const unique = require('./unique.js')
const getType = require('./getType.js')

/**
 * 融合多个数组，返回一个新数组
 * @param {Array}         arr[1]
 * @param {Array}         arr[2]
 * @param {Array}         arr[3]
 *   ...
 *   ...
 *   ...
 * @param {Array|Boolean} arr[n] 如果最后一项为 Boolean，则表示是否去重
 * @return {Array}
 */
function blendArr () {
    var arg = arguments;

    // 根据最后一个参数类型判断是否去重
    var isUnique = arguments[arguments.length-1];
    
    // 如果最后一个参数为 Boolean 则去掉最后一个参数再进行计算
    if(getType(isUnique)=='Boolean') {
        // 最后一项是是否去重，不列入计算范围，所以需要去除arguments最后一项
        // 由于 arguments 不是真正的数组，所以先转为数组
        arg = Array.prototype.slice.apply(arguments);
        
        // 去除最后一项
        arg.pop();
    }else {
        isUnique = false;
    }
    
    //执行合并操作
    var newArr = Array.prototype.concat.apply([], arg);
    
    return isUnique ? unique(newArr) : newArr;
}

module.exports = blendArr
