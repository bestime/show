/**
 * 
 * 函数节流 debounce: false 用于控制事件触发频率
 * 函数防抖 debounce: true  如果在wait时间内重复执行操作，那么仅执行最后一次操作
 * 
 * @param {Function} handle 绑定的函数
 * @param {Number} wait 多久执行一次
 * @param {Boolean} debounce [默认：fasle] 是否防抖
 * @param {Boolean} isFirstTimeToDo [默认：fasle] 第一次时候执行
 * @return {Function} 此为返回的节流函数
 */
function throttle (handle, wait, debounce, isFirstTimeToDo) {
    var timer = null;
    var preTime = 0; // 上一次执行的时间戳
    var currentTime = 0; //当前点击的时间戳
    var differTimer = 0;// 当次与上次的时间差
    
    return function () {
        clearTimeout(timer);
        var self = this;
        var arg = arguments;
        
        currentTime = +new Date();
        preTime = preTime ? preTime : currentTime;
        
        // 第一次执行程序时，不进行节流操作，直接返回，后面的不执行
        if(isFirstTimeToDo) {
            isFirstTimeToDo = false;
            return handle.apply(self, arg);
        }
        
        differTimer = currentTime - preTime; // 当次与上次的时间差
        if(differTimer < wait) {	
            // 这里为什么wait要减去一个数
            // 因为我们需要的是上一次到下一次的间隔为 wait
            // 而如果在上一次执行完之后的 wait 时间段里进行了最后一次点击，那么实际的 wait > wait
            // 为了防止部分浏览器的定时器值设置太小会失效，所以默认最小 20
            var computedDelay = wait - differTimer;
            computedDelay = computedDelay < 20 ? 20 : computedDelay;
            timer = setTimeout(function () {
                handle.apply(self, arg);
                preTime = currentTime;
            }, computedDelay);
        }else {
            handle.apply(self, arg);
            preTime = currentTime;
        }
        
        // 是否防抖，如果频率过快，只执行最后一次
        if(debounce){
            preTime = currentTime;
        }
    }
}

module.exports = throttle