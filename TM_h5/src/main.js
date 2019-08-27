import Vue from 'vue'

import { router, routerList } from './router'


import App from './App.vue'
import {
  Style,
  Select,
  Input,
  Upload
} from 'cube-ui'

Vue.use(Select)
Vue.use(Input)
Vue.use(Upload)

Vue.prototype.ns = window['ns']

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router
}).$mount('#app')