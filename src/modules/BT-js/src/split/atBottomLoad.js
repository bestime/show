var bindEasy = require('./bindEasy')
var mouseWheel = require('./mouseWheel')

function atBottomLoad (opt) {
	if(!opt.el) return;
	var el = opt.el;
	var deviation = opt.deviation; //偏移量，提前触发
	var showHeight = el.offsetHeight;
	var wait = opt.wait || 2000; //触发底部条件后，这段时间内不再触发
	var disabled = false;	
	var timer = null;
	var startTime = 0;

	var showDistence = showHeight
	
	
	// case 1 鼠标滚动方向
	mouseWheel(el, function (resDir) {
		handler(resDir)
	});
	
	// case 2 拖动导致的滚动条变化
	var top1 = 0;
	var top2 = 0;
	var scrollDir = 0;
	bindEasy(el, 'scroll', function(e) {
		top2 = el.scrollTop;
		
		
		if(top2>=showDistence) {
			opt.onShow && opt.onShow(showDistence)
		}else {
			opt.onHide && opt.onHide(showDistence)
		}
		if(top2 > top1) {
			scrollDir = -1;
		}else if(top2 < top1) {
			scrollDir = 1;
		}else {
			scrollDir = 0;
		}
		handler(scrollDir)
		top1 = top2
	})
	
	function handler (endDir) {
		if(showHeight<=el.scrollHeight || showHeight < el.offsetHeight) return;
		var scrollHeight = el.scrollHeight - deviation;
		var nowTop = el.scrollTop + showHeight;	
		if(nowTop>scrollHeight && endDir==-1) {		
			if(!disabled) {				
				disabled = true;
				startTime = +new Date();
				if(opt.onBottom) {						
					opt.onBottom(function (status) {
						if(status=='done') {
							clearTimeout(timer)
							timer = setTimeout(function () {
								disabled = false;
								startTime = 0;
							}, wait);
						}
					});
				}			
			}else{
				var last = wait -(+new Date()-startTime);
				opt.onFast && opt.onFast(last)
			}	
		}
	}
};

module.exports = atBottomLoad