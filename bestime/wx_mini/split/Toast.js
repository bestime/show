import _Number from '../../js/split/_Number.js'

export default function Toast(title = '未知消息', duration, icon = 'none') {
  duration = _Number(duration) || 2000
  return new Promise(resolve => {
    wx.showToast({ title, duration, icon })
    setTimeout(resolve, duration)
  })
}