const printColor = {
	yellow: function (name) {
		return "\033[33m"+ name +"\033[0m"
	},
	black: function (name) {
		return "\033[30m"+ name +"033[30m"
	},
	red: function (name) {
		return "\033[31m"+ name +"\033[0m"
	},
	green: function (name) {
		return "\033[32m"+ name +"\033[0m"
	},
	blue: function (name) {
		return "\033[34m"+ name +"\033[0m"
	},
	purple: function (name) {
		return "\033[35m"+ name +"\033[0m"
	},
	azure: function (name) {
		// 天蓝色
		return "\033[36m"+ name +"\033[0m"
	},
	white: function (name) {
		return "\033[37m"+ name +"\033[0m"
	}
}





/**
 * 这是一个简易的node测试 get 和 post 的服务器
 */
var express = require('express');
const config = {
	port: 9998
}

var app = new express();

// post 请求使用
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

/* 跨域 start */
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.json(200); 
    } else {
        next();
    }
});
/* 跨域 end */

app.get('/',function (req, res) {
	res.json({
		result: true,
		message: '这是首页'
	})
})


// get 测试，直接返回传过来的数据
app.get('/get',function (req, res) {
	res.json(req.query)
})

// post 测试，直接返回传过来的数据
app.post('/post',function (req, res) {
	res.json(req.body)
})






// 获取IP
function getIP () {
	var interfaces = require('os').networkInterfaces();　　
    for (var devName in interfaces) {　　　　
        var iface = interfaces[devName];　　　　　　
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }　　
    }
}
	



function server(){
	app.listen(config.port, function (err) {		
		if(err){
			console.log('服务启动失败：', err);
		}else{
			const url = `http://${getIP()}:${config.port}`
			//require('opn')(url); // 打开浏览器			
			console.log(printColor.red('Bestime测试服务启动').concat('：').concat(printColor.yellow(url)));
		}
	})
}


// 启动服务	
server();

































app.get('/jsonp-test', (req, res) => {
	const { node_callback } = req.query
	res.send(`${node_callback}(${JSON.stringify({
		code: 1,
		msg: `当前函数名：${node_callback}`,
		data: [
			{ name: 'Bestime', jon: 'web前端' }
		]
	})})`)
})






app.get('/user/return-record/list',function (req, res) {
	res.json({
		code: 1,
		data: {
			list: new Array(15).fill('').map((item, index)=> {
				return {
					product_id: index,
					name: `Bestime键盘${index}`,
					product_pic: 'https://static.aiwanhezi.com/2019/06/16/0426bc2832d4b81807f2be4dc897ea8b.jpg'
				}
			}),
			hasMore: false
		}
	})
})



app.post('/user/return-record/request',function (req, res) {
	console.log('退货申请：', req.body)
	res.json({
		code: 1,
		msg: '申请成功'
	})
})