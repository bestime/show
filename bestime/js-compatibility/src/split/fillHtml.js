// 给dom添加html。主要是处理了style标签的兼容问题

function fillHtml (DOM, htmlStr) {
    DOM.styleSheet ? DOM.styleSheet.cssText = htmlStr : DOM.innerHTML = htmlStr;
}

module.exports = fillHtml