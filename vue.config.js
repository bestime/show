
const path = require('path')


function convertTime (date, isString, typeNumber) {	
	date = isString ? new Date(Number(date)) : date;
	
	var result =  {
		year         : date.getFullYear(),
		month        : date.getMonth() + 1,
		day          : date.getDate(),
		hours        : date.getHours(),
		minutes      : date.getMinutes(),
		seconds      : date.getSeconds(),
		milliSeconds : date.getMilliseconds()
	}

	if(!typeNumber) {
		for(var key in result) {
			if(parseInt(result[key]) < 10) result[key] = '0' + result[key];
		}	
	}

	return result;
}



module.exports = {
	devServer: {
		port: 9089
	},
	outputDir: 'dist',
	filenameHashing: false,
	productionSourceMap: false,
	chainWebpack: GET_chainWebpack,
	publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
}

function resolve (dir) {
	return path.join(__dirname, dir)
}


function GET_chainWebpack (config) {
	const t = convertTime(new Date())
	config.plugin('html').tap(args => {		
		args[0].minify = {
			removeComments: false,
			collapseWhitespace: false,
			removeAttributeQuotes: false
		}
		args[0].inject = 'body'
		args[0].PACK_TIME = `${t.year}年${t.month}月${t.day}日${t.hours}时${t.minutes}分${t.seconds}秒${t.milliSeconds}毫秒`
		return args
	})

	config.plugins.delete('preload')	
	config.plugins.delete('prefetch')

	config.resolve.alias.set('@js', resolve('src/assets/js'))
											.set('@src', resolve('src'))
											.set('@css', resolve('src/assets/css'))
											.set('@images', resolve('src/assets/images'))
											.set('@bestime', resolve('bestime'))
											.set('@components', resolve('src/components'))
}
