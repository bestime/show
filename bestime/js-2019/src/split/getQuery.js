



/**
 * getQuery 获取url查询参数
 * @param {String} searchStr # [可选], 被查询的字符串，不填则为浏览器地址
 * @return {Object | String} json对象
 */

function getQuery (str) {
  var res = {}
  var href = ''; try { href = window.location.href } catch (e) {};
  (str!==null || typeof str!=='undefined' ? str : href).replace(/[^=?&]*=[^=&?]*/g, function (g) {
    res[decodeURIComponent(g.replace(/=.*/g, ''))] = decodeURIComponent(g.replace(/.*=/g, ''))
  });
  return res
}

// getQuery('name=张三'); // => { name: "张三" }
// getQuery('???name=张三?&?age=26'); // => { name: "张三", age: "26" }
// getQuery(null); // => {}
// getQuery(undefined); // => {}
// getQuery(''); // => {}
// getQuery('abc'); // => {}

module.exports = getQuery
