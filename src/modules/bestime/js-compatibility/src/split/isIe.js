
//如果是ie，就返回ie的版本号
function isIe () {
    var result = {};
    result.code = navigator.userAgent.toLowerCase().indexOf("msie") > -1;        
    if(result.code) result.ieUA = navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)[1];
    return result;
}

module.exports = isIe