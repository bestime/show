import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export const routerList = [
  {
    path: '/swiper-full-screen',
    name: 'swiper-full-screen',
    label: '全屏滚动',
    component: () => import('@components/home.vue'),
    meta: {
      
    }
  },
];

export const router = new Router({
  routes: routerList
})
