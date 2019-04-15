import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
Vue.config.productionTip = false

import { Switch, SwiperWrapper, SwiperItem } from '@npm/BT-vue-base'

console.log(Switch, SwiperWrapper, SwiperItem)
Vue.use(Switch)
Vue.use(SwiperWrapper)
Vue.use(SwiperItem)


var trim = ns.trim
function isNumber (str, sign, integer) {
  var zhengfu = '(-|\\+)?'
  var xiaoshu = integer==='int' ? '(\.0+)?' : '(\.[0-9]+)?'
  if(sign==='-') {
    zhengfu = '-'
  }else if(sign==='+') {
    zhengfu = '\\+?'
  }
  var regStr = '^' + zhengfu + '[0-9]+' + xiaoshu + '$'
  
  var res = new RegExp(regStr, 'g').test(trim(str))
  console.log(`【${str}】: `, res)
  return res
}



console.log('----任意数字----')
isNumber('0')
isNumber('-0')
isNumber('+0')
isNumber('1')
isNumber('1.1232323')
isNumber('1.0')
isNumber('1.00')
isNumber('-')
isNumber('+')
isNumber('.1')
isNumber('1.')
isNumber('1..')

console.log('----负数----')
isNumber('12', '-')
isNumber('-12', '-')
isNumber('-12.1', '-')

console.log('----正数----')
isNumber('-12', '+')
isNumber('12', '+')
isNumber('+12', '+')
isNumber('+12.1', '+')


console.log('----正整数数----')
isNumber('12.00', '+', 'int')
isNumber('12.001', '+', 'int')
isNumber('12.23', '+', 'int')



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



var arr = [
  { name: '1' },
  { name: '2' },
  { name: 'bestime' },
  { name: 'bestime' },
  { name: '3' },
  { name: '4' },
]

console.log(arr.find(item => item.name==='bestime'))
