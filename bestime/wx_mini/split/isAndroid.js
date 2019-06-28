import _Object from '../../js/split/_Object.js'

// 判断是否是 android
export default function isAndroid() {
  return new Promise(resolve => {
    wx.getSystemInfo({
      complete(sys) {
        sys = _Object(sys)
        resolve(/Android/g.test(sys.system))
      }
    })
  })
}