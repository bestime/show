import isFunction from './isFunction' 

/**
 * 一次性函数，使用一次后失效
 * @param {Function} handle 主函数
 * @return {Function}
 */
function FunctionOnce (handle) {
  let lock = false
  return function () {
    if(!lock && isFunction(handle)) {
      lock = true
      handle.apply(this, arguments)
    }
  }
}

export default FunctionOnce