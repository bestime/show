
import param from 'jquery-param'
import _Object from './_Object'
import _Array from './_Array'
import clear from './clear'


function getUrl (json, data) {
  if(json.type=='GET' && data) {
    const mark = String(json.url).match(/\?/) ? '&' : '?'
    return json.url + mark + data
  } else {
    return json.url
  }
}

export default function oFetch (opt) {
  opt = _Object(opt)
  opt.data = clear(_Object(opt.data)) // 数据
  opt.type = opt.type || 'GET' // 方式
  opt.dataType = opt.dataType || 'Object' // 处理返回的数据类型，默认Object
  opt.headers =  {
    'Accept': 'application/json',        
    'Content-Type': 'application/x-www-form-urlencoded',
    ..._Object(opt.headers)
  }

  return new Promise((resolve, reject) => {
    const dataParam = param(opt.data) // 编码后的数据

    fetch(getUrl(opt, dataParam), clear({
      method: opt.type,
      headers: new Headers(opt.headers),
      body: opt.type==='GET' ? '' : dataParam,
      credentials: 'include'
    }))
    .then(response => response.json())
    .then(res => {
      switch(opt.dataType) {
        case '*': break;
        case 'Array': res = _Array(res); break;
        default: res = _Object(res); break;
      }

      opt.result = res;
      console.log(opt)
      resolve(res)
    })
    .catch(err => {
      opt.result = err;
      console.log(opt)
      reject(err)
    })
  })
}