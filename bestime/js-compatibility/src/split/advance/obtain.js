
const param = require('jquery-param');
const defaultType = require('../defaultType')
const isEmptyData = require('../isEmptyData')
const split = require('../split')


//import { fetchResultCheck } from '@app/0/fetchResultCheck'

function fetchResultCheck () {}
var Base64 = require('js-base64').Base64;
function getInsertSetting () {
  let user = getUser();
  user.info = defaultType('Object', user.info)
  let user_token = '';
  try { user_token = getUser().user_token; } catch (e) { };

  return {
    headers: {
      'X-user-token' : user_token,
      'test': user.info.uid,
      'X-user-id': Base64.encode(user.info.uid)
    },
    data: {
      user_token: user_token
    },
    success: fetchResultCheck
  }
}


function obtain(opt) {
  opt = defaultType('Object', opt)  
  let url = opt.url
  let data = defaultType('Object', opt.data);

  // insert 数据一般为全局配置
  const insertObj = defaultType('Object', getInsertSetting());
  const insertData = defaultType('Object', insertObj.data);
  const insertHeaders = defaultType('Object', insertObj.headers)
  const insertError = defaultType('Function', insertObj.error)
  const insertSuccess = defaultType('Function', insertObj.success)

  // 插入全局data配置
  for(let key in insertData) {
    data[key] = insertData[key]
  }

  const type = opt.type || 'GET'

  let changeSetting = {}; // 不同类型，会变化的setting
  let searchStr = param(data); // 参数
  searchStr = isEmptyData(searchStr) ? '' : searchStr;
  
  if(type == 'GET') { // 如果是GET请求，拼接url
    url = toUrl(url, searchStr)
  }else {
    changeSetting = {
      body: searchStr
    }
  }

  // 设置
  let useSetting = Object.assign({
    method: type,
    headers: new Headers(Object.assign({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    }, insertHeaders)),

  }, changeSetting);

  console.log(`%c 【${type}】请求数据：`, 'background:#dd4215;color:#fff', `${url}\n`, useSetting)
  printTheData(decodeURIComponent(searchStr))

  return new Promise((resolve, reject) => {
    fetch(url, useSetting).then(res => {
      return res.json();
    }).then(res => {
      //console.log(`%c 【${type}】结果：`, 'background:green;color:#fff',`${url}\n`, res)
      insertSuccess(type, url, res, data)
      resolve(res);
    }).catch(err => {
      console.log(`%c 【${type}】错误：`, 'background:#000;color:yellow;',`${url}\n`, err)
      insertError(err)
      reject(err)
    })
  })
}


// 打印请求数据
function printTheData (str) {
  const arr = split(str, '&')
  const formatData = [];
  for(var a=0; a<arr.length; a++) {
    const one = arr[a].split('=')
    formatData.push({
      key: decodeURIComponent(one[0]),
      label: decodeURIComponent(one[1])
    })
  }  
  console.table(formatData)
}

function toUrl (url, str) {
  str && (url += String(url).match(/\?/) ? '&' : '?' + str);
	return url.replace(/&&/g, '&');
}

module.exports = obtain



