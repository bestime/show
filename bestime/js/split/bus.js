/*

var bus1 = bus.on('abc', function (data, ev) {
	uPrint('我是bus1', ev, data)
})

var bus2 = bus.on('abc', function (data, ev) {
	uPrint('我是bu2', ev, data)
})

var bus3 = bus.on('abc', function (data, ev) {
	uPrint('我是bus3', ev, data)
})

var bus4 = bus.on('abc', function (data, ev) {
	uPrint('我是bus4', ev, data)
}, 'customID')

var bus5 = bus.on('abc', function (data, ev) {
	uPrint('我是bus5', ev, data)
}, 'customID')


console.log('现在有1,2,3,5')
bus.emit('abc', '没删之前的事件')

bus1.delete()
bus3.delete()

console.log('少了1,3  剩下2,5')
bus.emit('abc', '剩下的事件')

*/





import _Object from './_Object'
import _Number from './_Number'


export default {
	// 事件中心
  events: {},
	
	// 获取同名事件集
	getKind: function (eventName) {
		var oneEventKind = _Object(this.events[eventName]); // 用于保存此类事件
		oneEventKind.children = _Object(oneEventKind.children)
		return oneEventKind
	},
  
	// 事件通知
	emit: function (eventName, data) {		
		var oneEventKind = this.getKind(eventName)
		var func = oneEventKind.children
		for(var key in func) {
			func[key].handle(data, {name: eventName, id: key})
			if(_Object(func[key]).once) {
				delete oneEventKind.children[key]
			}
		}
  },	
	
	// eventName 事件
	// kind_id 同事件id。id相同会被覆盖
	on: function (eventName, callback, kind_id, once) {
		var self = this;		
		var oneEventKind = this.getKind(eventName)		
		var defaultId = _Number(oneEventKind.did);//自动生成id
		!kind_id && defaultId++; // 自定义id
		
		var useId = kind_id || defaultId; // 判断使用哪个id
		
		oneEventKind.did = defaultId; // 用于记录上一次自动生成的id

		var oneHandle = {
			handle: callback,
			once: once ? true : false,
			id: useId
		}		
		oneEventKind.children[useId] = oneHandle		
		this.events[eventName] = oneEventKind
		return { 
			info: oneHandle,
			delete: function () {
				self.delete(oneHandle.id, oneHandle.name)
			}
		}
	},

	// 执行一次后自动就销毁
	once: function (eventName, callback, kind_id) {
		this.on(eventName, callback, kind_id, true)
	},

	// 相同函数只注册一次
	one: function (eventName, callback) {

	},
	
	// 事件移除
	delete: function (id, name) {
		var oneEventKind = this.getKind(name)
		delete oneEventKind.children[id]
	}
}