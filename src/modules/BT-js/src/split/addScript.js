
/**
 * 动态加载script
 * script不能用onload来判断是否加载成功
 * 【bug】ie 下有bug 无论js路径是否正确，都会走loaded，目前未解决
 * 
 * @param src         将要加载script的链接
 * @param callback    回调函数，加载完成时执行
 */
function addScript (src, callback) {
    var newScript = document.createElement('script');
    var loadedFlag = false; // onload 和 onreadystatechange 在ie9下都会执行，通过一个flag来判断是否已经执行，如果已经执行，就不再执行另一个
    
    newScript.onerror = function () {
        //alert('加载失败')
    };
    
    if(callback){        
        newScript.onload = function () { 
            if( checkLoaded() ) return callback();
        };
        
        newScript.onreadystatechange = function() {                
            var state = newScript.readyState; 
            if (state === 'loaded' || state === 'complete') {
                newScript.onreadystatechange = null;                    
                if( checkLoaded() ) return callback();
            } 
        }; 
    }

    function checkLoaded () {
        if(loadedFlag) return false;
        loadedFlag = true;
        return true;
    }

    newScript.src = src;
    document.body.appendChild(newScript);
}

module.exports = addScript