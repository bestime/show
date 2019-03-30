// 获取数据类型
function getType(data) {
	var type = Object.prototype.toString.call(data).split(' ')[1].slice(0, -1);
	return type;
}

module.exports = getType