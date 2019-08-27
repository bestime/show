window['Rem'] = function (minWidth, maxWidth) {
	document.write('\
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />\
		<meta name="format-detection"content="telephone=no, email=no" />\
		<meta name="wap-font-scale" content="no">\
		<meta name="renderer" content="webkit">\
		<meta http-equiv="X-UA-Compatible" content="IE=edge">\
		<meta name="HandheldFriendly" content="true">\
		<meta name="screen-orientation" content="portrait">\
		<meta name="x5-orientation" content="portrait">\
		<meta name="msapplication-tap-highlight" content="no">\
	');	
	var Dpr = 1;
	var uAgent = window.navigator.userAgent;
	var isIOS = uAgent.match(/iphone/i);
	var isYIXIN = uAgent.match(/yixin/i);
	var is2345 = uAgent.match(/Mb2345/i);
	var ishaosou = uAgent.match(/mso_app/i);
	var isSogou = uAgent.match(/sogoumobilebrowser/ig);
	var isLiebao = uAgent.match(/liebaofast/i);
	var isGnbr = uAgent.match(/GNBR/i);
	var oHtml = document.getElementsByTagName('html')[0];
	
	function resizeRoot() {
		var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth,
			wDpr, wFsize;
		var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight;
		if (window.devicePixelRatio) {
			wDpr = window.devicePixelRatio;
		} else {
			wDpr = isIOS ? wWidth > 818 ? 3 : wWidth > 480 ? 2 : 1 : 1;
		}
		if (isIOS) {
			wWidth = screen.width;
			wHeight = screen.height;
		}		
		
		computedWFsize();		
		window.screenWidth_ = wWidth;
		
		//YIXIN 和 2345 这里有个刚调用系统浏览器时候的bug，需要一点延迟来获取
		if (isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr) {
			setTimeout(function() {
				wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth;
				wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight;
				getWFsize();				
				computedWFsize();
			}, 500);
		} else {
			computedSize();
		}


		function computedWFsize () {
			if(wWidth > maxWidth) {
				wFsize = maxWidth / (maxWidth / 100);
			}else if(wWidth < minWidth) {
				wFsize = minWidth / (maxWidth / 100);
			}else {
				wFsize = wWidth / (maxWidth / 100);
			}
		}
		
		function computedSize () {
			oHtml.dataset.dpr = wDpr;
			oHtml.style.fontSize = wFsize + 'px';
		}
	}
	
	var timer = null;
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
		clearTimeout(timer);
		timer = setTimeout(function () {
			resizeRoot();
		}, 60);
	}, false);

	resizeRoot();	
}


