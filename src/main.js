import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
Vue.config.productionTip = false
import * as bestime from '@npm/bestime/js'
window['ns'] = bestime
Vue.prototype.ns = bestime


console.log('ns', ns)

import { 
  Switch,
  SwiperWrapper,
  SwiperItem,
  Loading,
  Image,
  RadioItem,
  RadioGroup,
  Input,
  Icon,
  Button
} from '@npm/bestime/vue'


Vue.use(Switch)
Vue.use(SwiperWrapper)
Vue.use(SwiperItem)
Vue.use(Loading)
Vue.use(Image)
Vue.use(RadioItem)
Vue.use(RadioGroup)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Button)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


