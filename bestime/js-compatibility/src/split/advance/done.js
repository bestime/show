/**
 * 简化await写法
 * @param {Function} promiseFunc promise函数
 * @return {Object} {status, res, err} 返回值，对象，可解构
 * @return {Object} status: 0 捕捉到错误, 1 成功
 * 
 * @egg
 * let {status, res, err} = await done(func)
 * if(status) {
 * 	console.log(res)
 * }else {
 * 	console.log(err)
 * }
 */
function done (promiseFunc) {
	return promiseFunc.then(res => {
		return { status: 1, res: res }
	}).catch(function (err) {
		return { status: 0, err: err }
	})
}

module.exports = done


/**
 * dk
 */