import Vue from 'vue'
import App from './App.vue'
import { router } from './router'

Vue.config.productionTip = false

import { switchVbt } from '@npm/BT-vue-base'

Vue.use(switchVbt)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
