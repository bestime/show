
const path = require('path')

module.exports = {
	devServer: {
		port: 9089
	},
	outputDir: 'dist',
	filenameHashing: false,
	productionSourceMap: false,
	chainWebpack: GET_chainWebpack
}

function resolve (dir) {
	return path.join(__dirname, dir)
}


function GET_chainWebpack (config) {
	config.plugin('html').tap(args => {		
		args[0].minify = {
			removeComments: false,
			collapseWhitespace: false,
			removeAttributeQuotes: false
		}
		args[0].inject = 'body'
		return args
	})

	config.plugins.delete('preload')	

	config.resolve.alias.set('@js', resolve('src/assets/js'))
											.set('@src', resolve('src'))
											.set('@css', resolve('src/assets/css'))
											.set('@images', resolve('src/assets/images'))
											.set('@npm/BT-vue-base', resolve('src/modules/BT-vue-base'))
											.set('@components', resolve('src/components'))
}
