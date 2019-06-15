/*
function printColor (name) {
	const colorMap = {
		'bold'          : ['\x1B[1m',  '\x1B[22m'],
		'italic'        : ['\x1B[3m',  '\x1B[23m'],
		'underline'     : ['\x1B[4m',  '\x1B[24m'],
		'inverse'       : ['\x1B[7m',  '\x1B[27m'],
		'strikethrough' : ['\x1B[9m',  '\x1B[29m'],
		'white'         : ['\x1B[37m', '\x1B[39m'],
		'grey'          : ['\x1B[90m', '\x1B[39m'],
		'black'         : ['\x1B[30m', '\x1B[39m'],
		'blue'          : ['\x1B[34m', '\x1B[39m'],
		'cyan'          : ['\x1B[36m', '\x1B[39m'],
		'green'         : ['\x1B[32m', '\x1B[39m'],
		'magenta'       : ['\x1B[35m', '\x1B[39m'],
		'red'           : ['\x1B[31m', '\x1B[39m'],
		'yellow'        : ['\x1B[33m', '\x1B[39m'],		
		'whiteBG'       : ['\x1B[47m', '\x1B[49m'],
		'greyBG'        : ['\x1B[49;5;8m', '\x1B[49m'],
		'blackBG'       : ['\x1B[40m', '\x1B[49m'],
		'blueBG'        : ['\x1B[44m', '\x1B[49m'],
		'cyanBG'        : ['\x1B[46m', '\x1B[49m'],
		'greenBG'       : ['\x1B[42m', '\x1B[49m'],
		'magentaBG'     : ['\x1B[45m', '\x1B[49m'],
		'redBG'         : ['\x1B[41m', '\x1B[49m'],
		'yellowBG'      : ['\x1B[43m', '\x1B[49m']
	}
	
	return {
		yellow: function (name) {
			return "\033[33m ${name} \033[0m"
		}
	}
}
*/

const printColor = {
	yellow: function (name) {
		return "\033[33m "+ name +" \033[0m"
	}
}

console.log(printColor.yellow('黄色字'))

/*

console.log("\033[30m 黑色字 \033[0m",)
console.log("\033[31m 红色字 \033[0m")
console.log("\033[32m 绿色字 \033[0m")
console.log("\033[33m 黄色字 \033[0m")
console.log("\033[34m 蓝色字 \033[0m")
console.log("\033[35m 紫色字 \033[0m")
console.log("\033[36m 天蓝字 \033[0m")
console.log("\033[37m 白色字 \033[0m")

*/





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
app.get('/test-get',function (req, res) {
	var result = {"username": "13983924120", "password": "123456"}
	res.json(result)
	//res.json(req.query)
})

// post 测试，直接返回传过来的数据
app.post('/test-post',function (req, res) {
	console.log('req', req.body)
	//console.log(JSON.parse(req.body))
	res.json(req.body)
})


function getOS () {
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
			const url = `http://${getOS()}:${config.port}`
			//require('opn')(url); // 打开浏览器			
			console.log(`Bestime测试服务启动：${url}`);
		}
	})
}


// 启动服务	
server();