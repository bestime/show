/**
 * 用于绑定后不用取消
 * bind的简化版
 * @param {Boolean} isRemoveBefore 是否移除上一个同名函数，默认 false 可重复绑定
 */

import bind from './bind'

function bindEasy (oDom, type, handler, isRemoveBefore) {
    isRemoveBefore = isRemoveBefore || false
    bind(oDom, 'n', type, handler, isRemoveBefore);
}

export default bindEasy