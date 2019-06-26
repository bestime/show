import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router'
import { mapActions } from 'vuex'
Vue.config.productionTip = false

import * as bestime from '@bestime/js'

window['ns'] = bestime
Vue.prototype.ns = bestime



import '@bestime/vue'



new Vue({
  name: 'vue-01',
  router,
  store,
  render: h => h(App),
  beforeMount () {
    router.beforeResolve((to, from, next) => {
      this.do_currentRouteName(to.name)
      next()
    })
  },
  methods: {
    ...mapActions([
      'do_currentRouteName'
    ])
  },
}).$mount('#app')


var d

console.log('清空', bestime.clear({
  a: null,
  b: '',
  c: undefined,
  d,
  e: '大大'
}))


var test02 = 'my name is bestime 中文 hh'
const arr = test02.match(/\b[a-zA-z][^ ]*\b/g)
arr.sort()
console.log('字符串：',test02, '结果：',  arr)



let max = {
  length: 0,
  value: ''
}

test02.replace(/\b[a-zA-z][^ ]*\b/g, g => {
  console.log( g, '长度：', g.length)
  if(g.length > max.length) {
    max = {
      length: g.length,
      value: g
    }
  }  
})

console.log(test02, ' => 结果：', max)



