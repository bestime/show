import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router'
import { mapActions } from 'vuex'
Vue.config.productionTip = false
Vue.prototype.BASE_URL = window['BASE_URL']


import Switch from '@bestime/vue/Switch.vue'
import Image from '@bestime/vue/Image.vue'
import Input from '@bestime/vue/Input.vue'
import Button from '@bestime/vue/Button.vue'
import RadioItem from '@bestime/vue/RadioItem.vue'
import RadioGroup from '@bestime/vue/RadioGroup.vue'
import Select from '@bestime/vue/Select.vue'
import CheckBox from '@bestime/vue/CheckBox.vue'
import FlexColumn from '@bestime/vue/FlexColumn.vue'
import SwiperWrapper from '@bestime/vue/SwiperWrapper.vue'
import SwiperItem from '@bestime/vue/SwiperItem.vue'
import TextOverflow from '@bestime/vue/TextOverflow.vue'
import Drawer from '@bestime/vue/Drawer.vue'

Vue.component(Switch.name, Switch)
Vue.component(Image.name, Image)
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(RadioItem.name, RadioItem)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Select.name, Select)
Vue.component(CheckBox.name, CheckBox)
Vue.component(FlexColumn.name, FlexColumn)
Vue.component(SwiperWrapper.name, SwiperWrapper)
Vue.component(SwiperItem.name, SwiperItem)
Vue.component(TextOverflow.name, TextOverflow)
Vue.component(Drawer.name, Drawer)

new Vue({
  name: 'vue-01',
  router,
  store,
  data () {
    return {
      test: 123
    }
  },
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