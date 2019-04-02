import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
Vue.config.productionTip = false

import { SwitchVbt, SwiperWrapperVbt, SwiperItemVbt } from '@npm/BT-vue-base'
Vue.use(SwitchVbt)
Vue.use(SwiperWrapperVbt)
Vue.use(SwiperItemVbt)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
