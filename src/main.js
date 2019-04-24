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



const arr = [
  { num: 1 },
  { num: 2 },
  { num: 3 },
]

console.log('reduce', arr.reduce((total, item) => {
  return total + item.num
}, 0))