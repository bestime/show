export default function fillHtml (DOM, htmlStr) {
  DOM.styleSheet ? DOM.styleSheet.cssText = htmlStr : DOM.innerHTML = htmlStr;
}