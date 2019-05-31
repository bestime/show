/**
 * jsonp
 *
 * @param {opt}                         选项
 *         -- callbackParam: String,    # 后端规定的callback字段
 *         -- cache: Boolean,           # <可选> 是否需要缓存 default: false
 *         -- overtime: Number,         # <可选> 超时时间，default: 10000

 * @author bestime 2017/06/11
 */

import _Function from './_Function'
import _Object from './_Object'
import createUUID from './createUUID'
export default function jsonp(opt) {
  const randomName = 'jsonp_' + createUUID()
  opt = _Object(opt)
  opt.success = _Function(opt.success)
  let timer = null
  var config = {
    callbackParam: opt.callbackParam || 'callback',
    callbackName: opt.callbackName || randomName,
    cache: opt.cache || false,
    overtime: opt.overtime || 10000
  };

  var result = {
    status: true,
    message: 'ok',
    data: [],
    url: opt.url
  };

  new (function (config) {
    var _this = this;
    this.url = getUrl(opt.url);
    this.flag = false;
    this.script = createScript(this.url);
    window[config.callbackName] = function (data) {
      if (opt.success) {
        result.status = true;
        result.data = data;
        result.url = _this.url;
        opt.success(result);
      }
      _this.flag = true;
      cleanup(_this.script, timer);
    }
    timer = setTimeout(function () {
      if (!_this.flag && opt.success) {
        result.status = false;
        result.data = null;
        result.message = 'over time';
        result.url = _this.url;
        opt.success(result);
        cleanup(_this.script, timer);
      }
    }, config.overtime);
  })(config)

  //创建script
  function createScript(url) {
    var target = document.getElementsByTagName('script')[0] || document.head;
    var script = document.createElement('script');
    script.src = url;
    target.parentNode.insertBefore(script, target);
    return script;
  };

  //删除script
  function cleanup(script, timer) {
    if (script.parentNode) script.parentNode.removeChild(script);
    clearTimeout(timer);
  }

  //处理url
  function getUrl(url) {
    url += (~url.indexOf('?') ? '&' : '?');
    url += '&' + config.callbackParam + '=' + config.callbackName;
    url += config.cache ? '' : '&cache=' + randomName;
    url = url.replace('?&', '?');
    url = url.replace('&&', '&');
    return url;
  }
}