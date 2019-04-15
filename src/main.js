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

