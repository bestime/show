import _String from './_String'
import fillHtml from './fillHtml'


function addStyle (callback) {
  var id = 'loading-vbt-css'
  if(document.getElementById(id)) return callback();
  var oStyle = document.createElement('style')
  oStyle.id = id
  fillHtml(oStyle, `
    .loading-vbt-wrapper{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:5000;display:flex;align-items:center;justify-content:center;flex-direction:column;}
  `);
  document.body.appendChild(oStyle)
  setTimeout(callback, 16)
}

export default function loading (msg, iconHtml) {
  msg = _String(msg) || '加载中'
  iconHtml = _String(iconHtml) || `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <path fill="#fff" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
      <animateTransform attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"/>
      </path>
    </svg>
  `;

  addStyle(function () {
    var el = document.createElement('div')
    el.className = 'loading-vbt-wrapper';
    el.innerHTML = `
      <div class="loading-vbt-icon">${iconHtml}</div>
      <div class="loading-vbt-text">${msg}</div>
    `;
    document.body.appendChild(el)
  });
}