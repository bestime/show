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



var defaultType =  require('./defaultType.js')
var toNumber =  require('./toNumber.js')

var bus = {
	// 事件中心
  events: {},
	
	// 获取同名事件集
	getKind: function (eventName) {
		var oneEventKind = defaultType('Object', this.events[eventName]); // 用于保存此类事件
		oneEventKind.func = defaultType('Object', oneEventKind.func)
		return oneEventKind
	},
  
	// 事件通知
	emit: function (eventName, data) {		
		var oneEventKind = this.getKind(eventName)
		var func = oneEventKind.func
		for(var key in func) {
			func[key](data, {name: eventName, id: key})
		}
  },	
	
	// eventName 事件
	// kind_id 同事件id。id相同会被覆盖
	on: function (eventName, callback, kind_id) {
		var self = this;
		
		var oneEventKind = this.getKind(eventName)
		
		var defaultId = toNumber(oneEventKind.did);//自动生成id
		!kind_id && defaultId++; // 自定义id
		
		var useId = kind_id || defaultId; // 判断使用哪个id
		
		oneEventKind.did = defaultId; // 用于记录上一次自动生成的id
		oneEventKind.func[useId] = callback		
		
		this.events[eventName] = oneEventKind
		
		// 返回当前事件信息，用来移除事件
		var initData = { name: eventName, id: useId }
		return { 
			info: initData,
			delete: function () {
				self.delete(initData)
			}
		}
	},
	
	// 事件移除
	delete: function (opt) {
		var oneEventKind = this.getKind(opt.name)
		delete oneEventKind.func[opt.id]
	}
}

module.exports = bus