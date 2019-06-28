// 检测新版本
export default function checkVersion() {
  return new Promise(resolve => {
    if (wx.getUpdateManager) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(res => {
        //res.hasUpdate = true
        // 请求完新版本信息的回调
        wx.showLoading({ title: '版本更新中' })
        if (!res.hasUpdate) {
          resolve()
        }
      })
      updateManager.onUpdateReady(() => {
        wx.hideLoading()
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })
      updateManager.onUpdateFailed(() => {
        // 新的版本下载失败
        resolve('upload-fail')
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  })
}