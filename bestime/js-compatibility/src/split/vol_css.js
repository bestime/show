

const fillHtml = require('./fillHtml');

function vol_css(classStr) {
    var CSS_BOX = document.createElement('style')
    CSS_BOX.className = classStr || 'vol-css';
    document.getElementsByTagName("head")[0].appendChild(CSS_BOX);
    var cssBuffer = {};
    
    return function (obj) {
        var appendStr = '';
        
        // 如果有参数，就遍历参数
        for(var key in obj) {
            cssBuffer[key] = obj[key];
        }
        
        for (var key in cssBuffer) {
            appendStr += key + '{' + cssBuffer[key] + '}';
        }
        
        fillHtml(CSS_BOX, appendStr);
    };
};

module.exports = vol_css