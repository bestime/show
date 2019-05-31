

import _Object from './_Object'
import isEmptyData from './isEmptyData'

//删除cookie
export default function removeCookie (key, opt) {
  opt = _Object(opt)    
  if(isEmptyData(opt)) {
    toClear()
  }else {
    for(var pk in opt) {
      toClear(pk, opt[pk]) 
    }
  }
    
  function toClear (part, partVal) {
    var oDate = new Date();
    oDate.setTime(oDate.getTime() - 10000000);
    var str = key + '=' + encodeURI('') + ';expires=' + oDate.toGMTString();
    if(part) {
      str = str +  ';' + part + '=' + partVal;
    }
    document.cookie = str        
  }
}
