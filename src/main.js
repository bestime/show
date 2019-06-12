import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router'
import { mapActions } from 'vuex'
Vue.config.productionTip = false


import * as bestime from '@npm/bestime/js'
window['ns'] = bestime
Vue.prototype.ns = bestime


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
  Button,
  Select
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
Vue.use(Select)

new Vue({
  name: 'vue-01',
  router,
  store,
  render: h => h(App),
  beforeMount() {
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



// const nowUrl = 'defa'
// const authentication = ['a', 'b', 'c']
// const res = authentication.some(item => nowUrl.indexOf(item) !== -1)
// alert(res)