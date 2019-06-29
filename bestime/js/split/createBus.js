

import _Array from './_Array'
import _Boolean from './_Boolean'
import getType from './getType'
import isObject from './isObject'

export default function createBus () {
  var events = {}; // 事件存放中心
  var id = 0

  function create (customeid, name, handle, isOnce, onlyOne) {
    var useId = customeid ? customeid : id++
    var oneHandle = {      
      name: name,
      id: useId,
      handle, handle,
      isOnce: _Boolean(isOnce)
    };

    if(onlyOne) {
      events[name] = oneHandle
    } else {
      events[name] = _Array(events[name])
      var isFind = false
      for(var a=0; a<events[name].length; a++) {
        if(events[name][a].id===useId) {
          events[name][a] = oneHandle
          isFind = true
          break;
        }
      }
      !isFind && events[name].push(oneHandle)
    }    
    return oneHandle
  }

  // 通知
  function emit (name, data) {    
    switch (getType(events[name])) {
      case 'Object':
        events[name].handle(data, events[name])
        if(events[name].isOnce) {
          delete events[name]
        }
        break;
      case 'Array':
        for(var a=events[name].length-1; a>=0; a--) {
          var item = events[name][a]
          item.handle(data, item)
          if(item.isOnce) {
            events[name].splice(a, 1)
          }
        }
        break;
    }
  }

  // 清空bus
  function clear (opt) {
    if(!isObject(opt)) return;
    switch (getType(events[opt.name])) {
      case 'Object':
        delete events[opt.name]
        break;
      case 'Array':
        for(var a=events[opt.name].length-1; a>=0; a--) {
          if(events[opt.name][a].id===opt.id) {
            events[opt.name].splice(a, 1)
          }
        }
        break;
    }
  }  

  return {
    // 【注册】 永久函数
    on: function (name, handle, id) {
      return create(id, name, handle)    
    },
    // 【注册】 一次性函数
    once: function (name, handle, id) {
      return create(id, name, handle, true)
    },

    // 【注册】 永久唯一函数
    one: function (name, handle) {
      return create(null, name, handle, false, true)
    },
    // 【注册】 一次性唯一函数
    oneonce: function (name, handle) {    
      return create(null, name, handle, true, true)
    },
    emit: emit,
    clear: clear,
    _events: events
  }
}