import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router'
import { mapActions } from 'vuex'
Vue.config.productionTip = false

import * as bestime from '@npm/bestime/js'

window['ns'] = bestime
Vue.prototype.ns = bestime
import '@npm/bestime/vue/all.js'
// import '@npm/bestime/vue'
// import FlexColumn from '@npm/bestime/vue/FlexColumn'
// import Switch from '@npm/bestime/vue/switch'
// import Loading from '@npm/bestime/vue/loading'
// import Image from '@npm/bestime/vue/image'
// import { SwiperWrapper, SwiperItem } from '@npm/bestime/vue/swiper-fullscreen'
// import { RadioItem, RadioGroup } from '@npm/bestime/vue/radio'
// import Input from '@npm/bestime/vue/Input'
// import Icon from '@npm/bestime/vue/Icon'
// import Button from '@npm/bestime/vue/Button'
// import Select from '@npm/bestime/vue/Select'
// import TextOverflow from '@npm/bestime/vue/TextOverflow'
// import CheckBox from '@npm/bestime/vue/CheckBox'

// Vue.use(FlexColumn)
// Vue.use(Switch)
// Vue.use(SwiperWrapper)
// Vue.use(SwiperItem)
// Vue.use(Loading)
// Vue.use(Image)
// Vue.use(TextOverflow)
// Vue.use(RadioItem)
// Vue.use(RadioGroup)
// Vue.use(Input)
// Vue.use(Icon)
// Vue.use(Button)
// Vue.use(Select)
// Vue.use(CheckBox)

new Vue({
  name: 'vue-01',
  router,
  store,
  render: h => h(App),
  beforeMount () {
    router.beforeResolve((to, from, next) => {
      this.do_currentRouteName(to.name)
      next()
    })
  },
  methods: {
    ...mapActions([
      'do_currentRouteName'
    ])
  },
}).$mount('#app')