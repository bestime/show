const defaultType = require('./defaultType')
const isEmptyData = require('./isEmptyData')

//删除cookie
function removeCookie (key, opt) {
    opt = defaultType('Object', opt)
    
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
        //console.log('%c 清除cookie', 'border:green solid 1px;color:green;border-radius:20px;background:yellow;',str)
        document.cookie = str        
    }
}


module.exports = removeCookie