/**
 * getQuery 获取url查询参数
 * @param {String} searchStr # [可选], 被查询的字符串，不填则为浏览器地址
 * @return {Object | String} json对象
 */
export default function getQuery (str) {
  var res = {}
  var href = ''; try { href = window.location.href } catch (e) {};
  (str!==null || typeof str!=='undefined' ? str : href).replace(/[^=?&]*=[^=&?]*/g, function (g) {
    res[decodeURIComponent(g.replace(/=.*/g, ''))] = decodeURIComponent(g.replace(/.*=/g, ''))
  });
  return res
}