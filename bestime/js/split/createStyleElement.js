import fillHtml from './fillHtml'
import _Function from './_Function'
import _String from './_String'
import FunctionLoop from './FunctionLoop'


/**
 * 插入静态<style></style>至文档
 * 如果存在相同ID，则不执行
 * 
 * @param {String} id 样式表ID 
 * @param {String} cssTXT 样式
 * @param {Function} callback 创建成功回调 
 *
 */


export default function createStyleElement (id, cssTXT, callback) {
  callback = _Function(callback)
  if(document.getElementById(id)) {
    callback()
  } else {
    var el = document.createElement('style')
    el.id = id
    fillHtml(el, _String(cssTXT))
    document.body.appendChild(el)
    // 轮询检测节点是否渲染完成，不然组件第一次可能没有样式
    FunctionLoop({
      handle: function (next, stop) {
        if(document.getElementById(id)) {
          stop()
          callback()
        }else {
          next()
        }
      },
      sleepTime: 30
    }).start()
  }
}