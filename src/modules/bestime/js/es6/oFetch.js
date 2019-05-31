
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
  opt.data = _Object(opt.data) // 数据
  opt.type = opt.type || 'GET' // 方式
  opt.headers = _Object(opt.headers) // hearders
  opt.dataType = opt.dataType || 'Object' // 处理返回的数据类型，默认Object

  

  return new Promise((resolve, reject) => {
    const dataParam = param(opt.data) // 编码后的数据
    console.log('oFetch', opt)
    fetch(getUrl(opt, dataParam), clear({
      method: opt.type,
      headers: new Headers({
        'Accept': 'application/json',        
        'Content-Type': 'application/x-www-form-urlencoded',
        ...opt.headers
      }),
      body: opt.type!='GET' ? dataParam : ''
    }))
    .then(response => response.json())
    .then(res => {
      switch(opt.dataType) {
        case '*': resolve(res); break;
        case 'Array': resolve(_Array(res)); break;
        default: resolve(_Object(res)); break;
      }
    })
    .catch(reject)
  })
}
