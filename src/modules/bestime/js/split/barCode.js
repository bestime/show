// 验证条码尾数
function getLastCode (s) {
  var a = 0,b = 0,c = 0,d = 0,e = 0;
  for (var i = 1; i <= 12; i++) {
    var sc = parseInt(s[i - 1]);
    if (i <= 12 && i % 2 == 0) {
      a += sc;
    }else if (i <= 11 && i % 2 == 1) {
      b += sc;
    }
  }
  c = a * 3;
  d = b + c;
  if (d % 10 == 0) {
    e = d - d
  } else {
    e = d + (10 - d % 10) - d
  }
  return e;
}

// 生成随机条码
function create () {
  let str = '69';
  for(let i=0; i<10; i++){
    str += Math.floor(Math.random()*10);
  }
  var checkcode = getLastCode(str);
  var res = str+checkcode
  return res
}

// 验证整个条码是否合法
function check (str) {
  str = String(str)
  const left = str.substr(0,str.length-1)
  const right = str.substr(str.length-1, 1)
  //console.log('barCode-check', left, right)
  let jishu = ''
  let j_num = 0

  let oushu = ''
  let o_num = 0

  for(let index in left) {
    if(index%2===0) {
      j_num += Number(left[index])
      jishu = `${left[index]}${jishu}`
    }else {
      o_num += Number(left[index])
      oushu = `${left[index]}${oushu}`
    }
  }

  //console.log(`${oushu}偶数和：`, o_num)
  

  const d3 = o_num * 3
  
  //console.log('偶数3倍：', d3)
  //console.log(`${jishu}奇数和 + 偶数3倍：`, j_num)
  const total = j_num + d3

  //console.log('奇数与上一步求和：', total)
  
  let ck = 10 - total % 10
  ck = ck === 10 ? 0 : ck
  // console.log('10-各位 得出校验码：', ck)
  console.log(`${str} 结果：${right}=${ck}`, right==ck)

  return right == ck
}

export default {
  create,
  check
}