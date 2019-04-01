import Vue from 'vue'
import App from './App.vue'
import { router } from './router'

Vue.config.productionTip = false

import { SwitchVbt, SwiperWrapperVbt, SwiperItemVbt } from '@npm/BT-vue-base'


console.log('abc', { SwitchVbt, SwiperWrapperVbt, SwiperItemVbt })

Vue.use(SwitchVbt)
Vue.use(SwiperWrapperVbt)
Vue.use(SwiperItemVbt)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')




var str = 'asdasasaasasasas??from=singlemessage&isappinstalled=0#/?url=https%3A%2F%2Fapi.guanliyuangong.com%2Fweixin%2Fmch-daily%3Fdata%3DYjg4MDdlMTFhODJlNDk5MzkyMjkzZTk1NjU2NzAwMWNmOGM3YmVlYWYwZDk4NmRmMDg5NWEyMjgzNTBjYWM0MmI4OTBkMmYyOWFiZDU4MWMxMjczOGNmMDhmNDNmMGNm'

var arr = str.match(/\?[^?]*(?=(\?)?)/g)
let useStr = ''
if(arr) {
  for(var a=0; a<arr.length; a++) {
    var item = arr[a]
    useStr += item.replace(/\#\/{0,}/g, '').replace(/\?[?]{0,}\??/, '&')
  }
}
console.log('useStr', useStr)
