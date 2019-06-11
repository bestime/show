import _String from './_String'
import fillHtml from './fillHtml'
import _Object from './_Object'
import addClass from './addClass'
import getById from './getById'
import getByClass from './getByClass'
import removeElement from './removeElement'
import isObject from './isObject'
import removeClass from './removeClass'
import isEmptyData from './isEmptyData'



// 添加样式
function addStyle (callback) {
  var id = 'loading-bt-css'
  if(document.getElementById(id)) return callback();
  var oStyle = document.createElement('style')
  oStyle.id = id
  fillHtml(oStyle, `
    #loading-bt-wrapper{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,0.7);z-index:5000;display:flex;align-items:center;justify-content:center;flex-direction:column;opacity:0;transition:0.2s;}
    .loading-bt-text{font-size:14px;color:#fff;}
    #loading-bt-wrapper.active{opacity:1;}
  `);
  document.body.appendChild(oStyle)
  setTimeout(callback, 16)
}

function oWrapperReady (callback) {
  clearInterval(window.jcy.loading.timer_r)
  clearTimeout(window.jcy.loading.timer_h)
  var oWrapper = getById('loading-bt-wrapper')
  if(oWrapper) {
    callback(oWrapper)
  }else {
    window.jcy.loading.timer_r = setInterval(function () {
      var oWrapper = getById('loading-bt-wrapper')
      if(oWrapper) {
        clearInterval(window.jcy.loading.timer_r)
        callback(oWrapper)
      }
    }, 16)
  }  
}

// 检测是否已存在loading
function useOldLoading (msg, iconHtml) {
  window.jcy = _Object(window.jcy)
  var isUseOld = isObject(window.jcy.loading) && !isEmptyData(window.jcy.loading)
  isObject(window.jcy.loading) && oWrapperReady(function (oWrapper) {
    addClass(oWrapper, 'active')
    var oText = getByClass('loading-bt-text', oWrapper)[0]
    var oIcon = getByClass('loading-bt-icon', oWrapper)[0]
    msg && (oText.innerHTML = msg);
    iconHtml && (oIcon.innerHTML = iconHtml);
  })
  return isUseOld
}

function showLoading (msg, iconHtml) {
  msg = _String(msg) || '加载中'
  iconHtml = _String(iconHtml) || `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <path fill="#fff" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
      <animateTransform attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"/>
      </path>
    </svg>
  `;
  if(useOldLoading(msg, iconHtml)) return false;

  // 上面先检查loading是否实例化
  window.jcy = _Object(window.jcy)
  if(!isObject(window.jcy.loading)) {
    window.jcy.loading = {}
  }  
  addStyle(function () {
    var el = document.createElement('div')
    el.id = 'loading-bt-wrapper';
    el.innerHTML = `
      <div class="loading-bt-icon">${iconHtml}</div>
      <div class="loading-bt-text">${msg}</div>
    `;
    document.body.appendChild(el)
    setTimeout(function () {      
      addClass(el, 'active')
    }, 16)
  });
}

function hideLoading () {
  var oWrapper = getById('loading-bt-wrapper')  
  if(oWrapper) {    
    removeClass(oWrapper, 'active')
    window.jcy.loading.timer_h = setTimeout(function () {
      
      window.jcy = _Object(window.jcy)
      window.jcy.loading = {}
      removeElement(oWrapper)
    }, 200 + 16)
  }
}

export default {
  show: showLoading,
  close: hideLoading
}