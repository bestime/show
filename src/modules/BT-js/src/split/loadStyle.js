var defaultType = require('./defaultType.js')

/**
 * 动态加载样式
 * [注]：动态加载css或者样式的成功回调目前在ie下有问题
 * 
 * @param {String} url 
 * @param {Function} callback 
 */


function loadStyle (id, url, callback) {
    callback = defaultType('Function', callback)
    var once = id ? true : false;
    id = 'ldsy-' + (id || +new Date());
    if(document.getElementById(id) && once) {
        return callback()
    }    
    var oHead = document.getElementsByTagName('head')[0];
    var oLink = document.createElement('link');
    oLink.onload = callback;
    oLink.href = url;
    oLink.id = id
    oLink.rel = 'stylesheet';
    oLink.type = 'text/css';
    oHead.appendChild(oLink);		
}

module.exports = loadStyle
