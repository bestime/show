
import _Object from '../../js/split/_Object.js'
import _Array from '../../js/split/_Array.js'
import _Function from '../../js/split/_Function.js'

import isAndroid from './isAndroid.js'


// 系统原生选择操作
export default function ActionSheet(opt) {
  opt = _Object(opt)
  const list = _Array(opt.list).map(item => _Object(item))
  isAndroid().then(bol => {
    bol && list.push({ key: 'cancel', label: '取消操作' })
    wx.showActionSheet({
      itemList: list.map(item => item.label),
      success(res) {
        const index = res.tapIndex
        const item = list[index]
        if (item.key == 'cancel') return;
        _Function(opt.onSelect)(item, index)
      }
    })
  })
}