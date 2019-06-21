// 存放其他插件使用的数据
import _Object from './_Object'

export default function getData () {
  window.jcy = _Object(window.jcy)
  return window.jcy
}