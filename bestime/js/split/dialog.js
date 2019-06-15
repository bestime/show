
import _Object from './_Object'
import fillHtml from './fillHtml'
import addClass from './addClass'
import removeClass from './removeClass'
import removeElement from './removeElement'
import getByClass from './getByClass'
import _String from './_String'
import _Function from './_Function'
import getType from './getType'
import isFunction from './isFunction'
import bind from './bind'
import unbind from './unbind'
import createUUID from './createUUID'



function addStyle (callback) {
  var id = 'dialog-vbt-css'
  if(document.getElementById(id)) return callback();
  var oStyle = document.createElement('style')
  oStyle.id = id
  fillHtml(oStyle, `
    .dialog-vbt{z-index:80000;position:fixed;left:0;right:0;bottom:0;top:0;display:flex;align-items:center;justify-content:center;}    
    .dialog-bg {z-index:1;background:rgba(0,0,0,0.5);position:absolute;left:0;right:0;top:0;bottom:0;opacity:0;transition:0.2s;}
    .dialog-content{z-index:2;position:relative;background:#fff;opacity:0;transform:translateY(-10%);transition:0.2s ease-out;box-shadow:0 0 20px rgba(0,0,0,0.2);min-width:300px;max-width:80%;max-height:80%;display:flex;flex-direction:column;}
    .dialog-vbt.active .dialog-bg{opacity:1;}
    .dialog-vbt.active .dialog-content{transform:translateY(0);opacity:1;border-radius:4px;}
    .dialog-title{font-size:16px;color:#000;border-bottom:#f2f2f2 solid 1px;padding:8px 10px;}
    .dialog-title *{display:inline-block;vertical-align:middle;}
    .dialog-msg-box{padding:10px;font-size:14px;color:#585858;overflow:auto;}
    .dialog-btn-box{padding:0 5px 10px 10px;text-align:right;font-size:0;}
    .dialog-btn{font-size:12px;display:inline-block;cursor:pointer;user-select:none;padding:5px 10px;border-radius:4px;transition:0.2s;margin-right:5px;}
    .dialog-btn.confirm{background:rgba(100,150,255,1);color:#fff;}
    .dialog-btn.confirm:hover{rgba(100,150,255,0.8);}
    .dialog-btn.confirm:active{box-shadow:0 0 0 2px rgba(100,150,255,0.2);}
    .dialog-btn.cancel{background:#e6e6e6;color:#8c8c8c;}
    .dialog-btn.cancel:active{background:#bbbbbb;}
    .dialog-vbt .duration{font-size:14px;color:#949494;font-weight:normal;}
    .dialog-vbt.group .dialog-bg{background:transparent;}    
  `);
  document.body.appendChild(oStyle)
  setTimeout(callback, 16)
}

export default function dialog (opt) {
  opt = _Object(opt)
  opt.title = _String(opt.title) || '提示' // 标题
  opt.msg = _String(opt.msg) // 显示的内容
  opt.startClose = opt.startClose || null // 关闭前回调
  opt.closed = _Function(opt.closed) // 关闭完成回调
  opt.onShow = _Function(opt.onShow) // 显示完成回调
  var wrpId = 'dialog_' + createUUID(); // 弹窗ID
  addStyle(function () {
    var closeing = false; // 关闭中，禁止多次点击
    var timer_show = null; // 显示的timer
    var timer_autoClose = null // 自动关闭的timer  
    
    var oldWrappers = getByClass('dialog-vbt')
    var oWrapper = document.createElement('div')
    var gpName = oldWrappers.length ? ` group dialog-${oldWrappers.length}` : ''
    oWrapper.className = 'dialog-vbt' + gpName
    oWrapper.id = wrpId
    oWrapper.innerHTML = `
      <div class="dialog-bg"></div>
      <div class="dialog-content">
        <div class="dialog-title">
          <span>${opt.title}</span>
          <b class="duration"></b>
        </div>
        <div class="dialog-msg-box">${_String(opt.msg) || '默认信息'}</div>
        <div class="dialog-btn-box">
        <div class="dialog-btn cancel">取消</div>
          <div class="dialog-btn confirm">确定</div>
        </div>
      </div>
    `;
    document.body.appendChild(oWrapper)
    setTimeout(function () {
      listenKeyBoard()
      addClass(oWrapper, 'active')
      doAutoClose()
      timer_show = setTimeout(function () {
        opt.onShow()                
      }, 200 + 16)
    }, 16);

    var oMsgBox = getByClass('dialog-msg-box', oWrapper)[0]
    var oDuration = getByClass('duration', oWrapper)[0]

    getByClass('dialog-bg', oWrapper)[0].onclick = checkToClose    
    getByClass('confirm', oWrapper)[0].onclick = function () {
      checkToClose('confirm')
    }
    getByClass('cancel', oWrapper)[0].onclick = function () {
      checkToClose('cancel')
    }

    // 监听按键
    function listenKeyBoard () {
      bind(document, wrpId, 'keydown', function (e) {
        var ev = e || window.event        
        if(ev.keyCode ==27) {
          checkToClose()
        }
      })
    }

    // 移除按键监听
    function removeKeyBoard () {
      unbind(document, wrpId, 'keydown')
    }

    // 计算自动关闭
    function doAutoClose () {
      if(getType(opt.autoClose)=='Number') {
        var duration = opt.autoClose < 2000 ? 2000 : opt.autoClose; // 最小值2000
        oDuration.innerHTML = '(' + Math.ceil(duration/1000) + 's)';
        timer_autoClose = setInterval(function () {
          if(duration<=0) {
            checkToClose()
            clearInterval(timer_autoClose)
          } else {
            duration -= 1000
            oDuration.innerHTML = '(' + Math.ceil(duration/1000) + 's)';
          }
        }, 1000)
      }
    }

    // 关闭主函数
    function checkToClose (hideType) {
      if(closeing) return;
      clearTimeout(timer_show)
      closeing = true
      hideType = _String(hideType) || 'default'
      if(hideType=='confirm' && isFunction(opt.startClose)) {
        opt.startClose(function (isClose, checkedMsg) {
          if(isClose!==false) {
            removeDialog(hideType)
          } else {
            oMsgBox.innerHTML = checkedMsg
            closeing = false
          }
        }, hideType)
      } else {
        removeDialog(hideType)
      }
    }

    // 执行关闭
    function removeDialog (hideType) {
      removeKeyBoard()
      removeClass(oWrapper, 'active')
      setTimeout(function () {
        clearInterval(timer_autoClose)
        removeElement(oWrapper)
        opt.closed(hideType)
        closeing = false
        oWrapper = null;
      }, 200 + 16)
    }
  })
}