
import _Function from './_Function'
import isObject from './isObject'

export default function onDomRoll (el, opt) {
  if(!isObject(opt)) return;  
  var doing = false
  el.onscroll = function () {
    if(!doing) {
      if(el.scrollTop<=0) {
        doing = true
        _Function(opt.onTop)(function () {
          doing = false;
        })
      }else if(el.scrollTop >= el.scrollHeight - el.offsetHeight) {
        doing = true;
        _Function(opt.onBottom)(function () {
          doing = false
        })
      } else {
        doing = false
      }
    }
  }
}