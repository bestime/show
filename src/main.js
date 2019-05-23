import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
Vue.config.productionTip = false

import { 
  Switch,
  SwiperWrapper,
  SwiperItem,
  Loading,
  Image,
  RadioItem,
  RadioGroup
} from '@npm/BT-vue-base'


Vue.use(Switch)
Vue.use(SwiperWrapper)
Vue.use(SwiperItem)
Vue.use(Loading)
Vue.use(Image)
Vue.use(RadioItem)
Vue.use(RadioGroup)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
