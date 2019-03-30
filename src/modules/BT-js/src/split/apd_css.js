
const fillHtml = require('./fillHtml');

function apd_css(classStr) {
    var CSS_BOX = document.createElement('style');
    CSS_BOX.className = classStr || 'apd-css';
    document.getElementsByTagName("head")[0].appendChild(CSS_BOX);
    var computedCssStr = '';
    // 为了减少代码，不进行输出美化处理。基本不会去看里面的内容
    return function(str) {
        //str = '\n' + str.replace(/^\s+/, '');
        //str = str.replace(/}([\s]+)?/g, '}\n');
        computedCssStr += str;
        fillHtml(CSS_BOX, computedCssStr);
    };
};

module.exports = apd_css