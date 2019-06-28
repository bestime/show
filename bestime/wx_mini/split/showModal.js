import _Object from '../../js/split/_Object.js'

// 确定对话框
export default function showModal(opt) {
  opt = _Object(opt)
  return new Promise(resolve => {
    wx.showModal({
      title: opt.title || '提示',
      content: opt.msg || '是否删除该标签',
      success(res) {
        if (res.confirm) {
          resolve()
        }
      }
    })
  })
}