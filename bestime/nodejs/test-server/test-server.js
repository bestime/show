
function getRandom (min, max) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;    
}
function getRandomArray (arr, num) {
  var usedIndex = {}, res = [], rdIdx;
  ;(function add () {
    if(res.length < num && res.length < arr.length) {
      rdIdx = getRandom(0, arr.length - 1)
      if(usedIndex[rdIdx]) {
        add()
      } else {
        res.push(arr[rdIdx])
        usedIndex[rdIdx] = true
        add()
      }
    }
  })();

  for(var a = res.length; a<num; a++) {
    res.push('R_'  + a)
  }
  
  return res
}

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
var multer  = require('multer')
var fs = require('fs');
var path = require('path')
const config = {
	port: 9997
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

app.get('/external/getadvert',function (req, res) {
	res.json({
    code: 0,
    data: {
      pic: 'http://pic27.nipic.com/20130313/9252150_092049419327_2.jpg',
      price: '100',
      price_now: '99'
    }
  })
})

// post 测试，直接返回传过来的数据
app.post('/post',function (req, res) {
  const data = {
    msg: '提交成功',
    code: 1,
    ...req.body
  }
	res.json(data)
})






// 获取IP
function getIP () {
	var interfaces = require('os').networkInterfaces();　
  console.log('interfaces', interfaces)　
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


























app.post('/login', (req, res) => {
	res.json({
		code: 0,
		msg: '登录成功'
	})
})

app.post('/logout', (req, res) => {
	const code = 0
	res.json({
		code,
		msg: code ? '不允许退出' : '退出成功'
	})
})






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

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8787 });
 
wss.on('connection', function connection(ws) {
  console.log(printColor.green('Socket 连接成功'))
  ws.on('message', function incoming(message) {
    console.log(printColor.purple('Socket 消息进入：' + message))
    ws.send(`{ "Sender":"5137701278@chatroom","Sender2":"wxid_99capkbhcy1w22", "data":"${message}" }`);
  });
});




function getRandom (min, max) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;    
}











var allHeroId = ["55", "122", "50", "119", "106", "113", "201", "22", "127", "34", "28", "25", "60", "266", "110", "63", "114", "86", "10", "236", "89", "67", "555", "41", "104", "21", "30", "82", "203", "53", "157", "136", "102", "238", "84", "98", "85", "121", "421", "31", "38", "107", "19", "103", "76", "150", "117", "45", "78", "18", "4", "222", "254", "126", "164", "80"]



var allSmallEqument = [
  'aaaaaa_无所谓前缀_1038', 'aaaaaa_无所谓前缀_1038', 
  'aaaaaa_无所谓前缀_1058', 'aaaaaa_无所谓前缀_1058',
  'aaaaaa_无所谓前缀_1043', 'aaaaaa_无所谓前缀_1043',
  'aaaaaa_无所谓前缀_3070', 'aaaaaa_无所谓前缀_3070',
  'aaaaaa_无所谓前缀_1031', 'aaaaaa_无所谓前缀_1031',
  'aaaaaa_无所谓前缀_1057', 'aaaaaa_无所谓前缀_1057',
  'aaaaaa_无所谓前缀_1011', 'aaaaaa_无所谓前缀_1011',
  'aaaaaa_无所谓前缀_4000', 'aaaaaa_无所谓前缀_4000',
  'aaaaaa_无所谓前缀_MagicDust', 'aaaaaa_无所谓前缀_MagicDust',
  'aaaaaa_无所谓前缀_CloakOfAgility', '_bbbbb_无所谓前缀_CloakOfAgility'
] || ['_bbbbb_无所谓前缀_CloakOfAgility', '1038', '1058']

var notSupport = '====技术有限，该功能暂不提供===='

app.get('/tft_info',function (req, res) {
	res.json({
    code: 0,
    msg: 'ok',
    data: {
      '全部英雄': [
        { id: 55, health: getRandom(300, 3000), money: undefined, lv: undefined},
        { id: 119, health: getRandom(300, 3000), money: undefined, lv: undefined},
        { id: 55, health: getRandom(300, 3000), money: undefined, lv: undefined},
        { id: 119, health: getRandom(300, 3000), money: undefined, lv: undefined},
        { id: 55, health: getRandom(300, 3000), money: undefined, lv: undefined},
        { id: 119, health: getRandom(300, 3000), money: undefined, lv: undefined}
      ],
      '星级概率': [
        {price: 1, percent: 50},
        {price: 2, percent: 10},
        {price: 3, percent: 25},
        {price: 4, percent: 15},
      ],
      '升级后剩余': 135,
      '8个阵容': new Array(8).fill('').map(function (item, index) {
        return {
          //heros: getRandomArray(allHeroId, 8), // 英雄ID
          //heros_num: [1,2,3,4,5,6,7], // 英雄数量
          lv: getRandom(1,9), // Lv.x
          money: undefined, // 玩家金币
          isBig: index == 5,
          // 场上英雄       
          heros_info: [
            { id: 107, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 126, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 84, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 150, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 254, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 555, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 76, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 76, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 76, health: getRandom(300, 3000), money: undefined, lv: undefined},
            
          ],
          spare_hero: [
            { id: 113, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 203, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 19, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 55, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 21, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 102, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 103, health: getRandom(300, 3000), money: undefined, lv: undefined},
            { id: 122, health: getRandom(300, 3000), money: undefined, lv: undefined},
            
          ]
        }
      }),
      '我的': {
          
      },
      '标记': [
        {
          buy_count: 10, // 购买次数
          sell_count: 5, // 卖出次数
          list: ['种族', '职业', '最佳', '敌需', '升级'] // 英雄标记
        },
        {
          buy_count: 15,
          sell_count: 2,
          list: ['最佳', '敌需', '升级'],
        },
        {
          buy_count: 0,
          sell_count: 0,
          list: []
        },
        {
          buy_count: 33,
          sell_count: 40,
          list: ['升级']
        },
        {
          buy_count: 60,
          sell_count: 50,
          list: ['职业', '最佳', '升级']
        }
      ],
      '当前装备': allSmallEqument || [
        1031
      ],
      
      '布阵': notSupport || {
        '第一排': [false, 55, 122, false, 50, false, false],
        '第二排': [34, 28, false, false, false, false, 25],
        '第三排': [21, 30, 82, false, false, false, false],
      },
      '合成推荐': notSupport || [
        {
          hero_id: 201,
          recommend_equiment: ['3075', '3131']
        },
        {
          hero_id: 236,
          recommend_equiment: ['3190', '4005']
        }
      ],
      '可换英雄': [
        '麦林炮手',
        '',
        '无极剑圣',
        '张三',
        '',
        '',
        '李四',
        '',
        '',
      ],
      'C位推荐': notSupport || [
        {
          hero_id: 201,
          recommend_equiment: ['3075', '3131'],
          active: true
        },
        {
          hero_id: 236,
          recommend_equiment: ['3190', '4005'],
          active: false
        },
        {
          hero_id: 203,
          recommend_equiment: ['3190', '4005'],
          active: true
        },
        {
          hero_id: 238,
          recommend_equiment: ['3190', '4005'],
          active: false
        }
      ],    
      
    }
  })
})





app.get('/vip',function (req, res) {
  res.json({
    code: 0,
    msg: '付费成功',
    data: {
      username: req.query.name
    }
  })
})






