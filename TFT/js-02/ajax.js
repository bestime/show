!function () {
  var _String = ns._String
  var _Object = ns._Object
  var _Function = ns._Function
	var isEmpty = ns.isEmpty
	var getType = ns.getType
  ns['ajax'] = function (opt) {
    var url = _String(opt.url)
    var type = opt.type || 'GET'
    var data = _Object(opt.data)
    var success = _Function(opt.success)
    var error = _Function(opt.error)
    var dataType = opt.dataType || 'json'

		var xhr = null;
		try {
			xhr = new XMLHttpRequest();
		} catch (e) {
			xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}	
		
		if (type === 'GET' && !isEmpty(data)) {
			// get方式存在缓存，所以在最后添加一个 时间戳
			url = url + '?' + dataFilter(data)
		}
		
		xhr.open(type, url, true);
		
		if (type == 'GET') {
			xhr.send();
		} else {
			xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			data = dataFilter(data);
			xhr.send(data);
		}
		
		xhr.onreadystatechange = function() {
			if ( xhr.readyState == 4 ) {
				if ( xhr.status == 200 ) {
          var res = xhr.responseText
          switch (dataType) {
            case 'json':
              try {
                res = JSON.parse(res)
              } catch (e) {
                res = {}
              }
              break;
            case 'Array':
              res = ns._Array(res)
              break;
            case '*': break;
          }
					success(res);
				} else {
					error('Err：' + xhr.status);
				}
			}
		}
		
		// 处理data
		function dataFilter (data) {
			var result = '';
			for(var key in data) {
				result += '&' + key + '=' + encodeURI(data[key]);
			}
			result = result.replace(/^&/, '');
			return result;
		}	
	}
	

	function param (data) {
		data = _Object(data)
		var key;
		var res = []
		for(key in data) {
			switch (getType(data)) {
				case 'Object':
					res.push(key + '=' + data[key])
					break;
				case 'Array':
					break;
				default:

			}
		}

		//console.log(res)

		function buildParams () {

		}
	}



	param({
		name: '张三',
		job: [
			{ work: '前端', age: 20 },
			{ work: 'php', age: 25 },
		]
	})
} ();





