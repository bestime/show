function isPhone (number, yys) {	
	number = String(number) || ''
	// 移动号段
	var yidong = [172,134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188,198];
	
	// 联通号段
	var liantong = [130,131,132,155,156,145,176,185,186,166,171];
	
	// 电信号段
	var dianxing = [133,149,153,173,177,180,181,189,199,170,175];	
	
	var isSuccess = false;	
	var isPhone = phoneNumber(number);
	var same6 = sameNumber(); // 相同的数字
	
	// 格式验证
	function phoneNumber (str) {
		var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
		var isMob=/^((\+?86)|(\(\+86\)))?[0-9]{11}$/;
		if(isMob.test(str)||isPhone.test(str)){
			return true;
		}else{
			return false;
		}
	}
	
	// 连续相同数字验证，超过6位为false
	function sameNumber () {
		var result = true;
		var sameNum = 1;
		var currentNum = number[0];
		for(var a=1; a<number.length; a++) {
			if(currentNum!=number[a]) {
				currentNum = number[a];
				sameNum = 1;
			}else {
				sameNum++
				if(sameNum>=6) {
					result = false;
					break;
				}
			}
		}		
		return result;
	}
	
	if(isPhone && same6) {
		var prefix = String(number).match(/^[0-9]{3}/g)[0];	
		switch(yys) {
			case '中国移动':
				for(var a=0; a<yidong.length; a++) {
					if(yidong[a]==prefix) {
						isSuccess = true;
						break;
					}
				}
				break;
			case '中国电信': 
				for(var a=0; a<dianxing.length; a++) {
					if(dianxing[a]==prefix) {
						isSuccess = true;
						break;
					}
				}
				break;
			case '中国联通':
				for(var a=0; a<liantong.length; a++) {
					if(liantong[a]==prefix) {
						isSuccess = true;
						break;
					}
				}
				break;
			default:
				// 不判断运营商
				var allNumberArr = Array.prototype.concat.apply([], [dianxing, yidong, liantong]); // 合并三大运营商的号段
				for(var a=0; a<allNumberArr.length; a++) {
					if(allNumberArr[a]==prefix) {
						isSuccess = true;
						break;
					}
				}
				break;
		}
	}	
	return isSuccess;	
}

module.exports = isPhone