import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router'
import { mapActions } from 'vuex'
Vue.config.productionTip = false

// import * as bestime from '@bestime/js'

// window['ns'] = bestime
// Vue.prototype.ns = bestime



import '@bestime/vue'



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


new Vue({
  name: 'demo',
  router,
  store,
  render: h => h(App),
  beforeMount () {
    router.beforeResolve((to, from, next) => {
      var color = to.meta.color;// 当然可以在路由配置中配置其他参数
      next()
    })
  }
}).$mount('#app')


