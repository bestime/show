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


