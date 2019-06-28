
import regeneratorRuntime from 'bestime-runtime'
const param = require('jquery-param')
import { Toast } from '../index.js'
import { _Object, _Array, _Function, defaultType, sleep, clear, isObject, _Number } from '../../js/index.js'

function insertConfig () {
  let header = {}
  let data = {}
  if (isObject(wx.bestime)) {
    const ist = _Object(wx.bestime.obtainConfig)
    header = _Function(ist.insertHeader)()
    data = _Function(ist.insertData)()
  }

  return {
    header: _Object(header),
    data: _Object(data)
  }
}


export default function obtain(opt) {
  opt = _Object(opt)
  opt.header = clear({
    'content-type': 'application/x-www-form-urlencoded',
    ...insertConfig().header,
    ..._Object(opt.header)
  })
  opt.data = {
    ..._Object(opt.data),
    ...insertConfig().data
  }
  opt.config = _Object(opt.config)
  opt.config.dataType = opt.config.dataType || 'Object'
  const globalData = getApp().globalData
  const user = _Object(wx.getStorageSync('user'))
  const host = _Object(globalData.host)
  const method = opt.type || 'GET'
  const loading = opt.loading === false ? false : true
  const delay = 1000

  
  // 请求必带参数
  let url = opt.url
  let data = opt.data
  
  // 处理参数
  if (method == 'GET') {
    url += `${url.match(/\?/g) ? '&' : '?'}${param(data)}`
    data = {}
  } else if (method == 'POST') {
    data = param(data)
  }
  url = url.replace(/(\?|&)$/g, '')


  // 关闭loading
  function hideLoading() {
    if (!loading) return;
    getApp().globalData.LOD_DONE = _Number(getApp().globalData.LOD_DONE) + 1
    setTimeout(() => {
      getApp().globalData.LOD_END = getApp().globalData.LOD_END + 1
      if (getApp().globalData.LOD_CURRENT === getApp().globalData.LOD_END) {
        wx.hideLoading()
      }
    }, delay)
  }

  // 显示loading
  function showLoading() {
    if (!loading) return;    
    getApp().globalData.LOD_CURRENT = _Number(getApp().globalData.LOD_CURRENT) + 1
    setTimeout(() => {
      if (getApp().globalData.LOD_CURRENT !== getApp().globalData.LOD_DONE) {
        wx.showLoading()
      }
    }, delay)
  }

  return new Promise((resolve, reject) => {
    console.log('一个请求：', opt)
    showLoading()
    wx.request({
      url,
      method,
      data,
      header: opt.header,
      success: async res => {
        hideLoading()
        if (res.statusCode == 200) {
          if (opt.config.dataType != '*') {
            res.data = defaultType(opt.config.dataType, res.data)
          }
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      fail: err => {
        Toast(JSON.stringify(err), 5000)
        hideLoading()
        reject(err)
      }
    })
  })
}


/*
// 插入配置项
wx.bestime = {
  obtainConfig: {
    insertHeader: function () {
      return {}
    },
    insertData: function () {
      return {
        token: config.getToken()
      }
    }
  }
}

 */