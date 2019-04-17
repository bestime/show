import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
Vue.config.productionTip = false

import { Switch, SwiperWrapper, SwiperItem } from '@npm/BT-vue-base'

console.log(Switch, SwiperWrapper, SwiperItem)
Vue.use(Switch)
Vue.use(SwiperWrapper)
Vue.use(SwiperItem)





new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



function sleep (stamp) {
  return new Promise(resolve => setTimeout(resolve, stamp))
}

var def = '之前的数据'

async function test () {
  await sleep(2000)
  def = '我改变了'
}

async function doTest () {
  console.log('def', def)
  await test()
  console.log('def', def)
}

doTest()