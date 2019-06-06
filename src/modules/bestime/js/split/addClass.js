


const unique = require('./unique.js')
import getType from './getType'
import each from './each'
import hasClass from './hasClass'


/**
 * 添加class
 * @param {object} element # dom元素 
 * @param {String || Array} addClassName # 需要增加的className。可接受单个字符串或数组 
 */
export default function addClass (el, addClassName) {
  if(getType(addClassName)=='Array') {
    each((unique(addClassName)), function (_item) {
      addOne(_item);
    });
  }else {
    addOne(addClassName);
  }
  
  function addOne(oneClassName) {
    if(!hasClass(el, oneClassName)) {
      el.className += (el.className ? (' ' + oneClassName) : oneClassName);
    }
  }
}