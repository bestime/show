import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
Vue.config.productionTip = false

import { Switch, SwiperWrapper, SwiperItem } from '@npm/BT-vue-base'


Vue.use(Switch)
Vue.use(SwiperWrapper)
Vue.use(SwiperItem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



var str = '<div class="one"><div class="h100">DESKTOP-GC4U8VE号机顾客离开打扫提醒<span class="jk">，请及时整理清洁卫生！</span></div></div>,bestime号机123，lynn号机'

str = str.replace(/((,|，|\>)[^>，,]*号机)/g, function (g) {
  return g.replace(/([^>，,]*号机)/g, '<b style="color:orange;">$1</b>')
})
console.log(str)