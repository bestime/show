import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export const HomeList = [
  {
    path: '/',
    name: '首页',
    label: '首页',
    component: () => import('@components/Home.vue'),
    meta: {
      msg: '我的数据'
    }
  }
]
export const router = new Router({
  routes: HomeList
})