import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export const HomeList = [
  {
    path: '/vue',
    name: 'vue',
    label: 'test',
    component: () => import('@components/vue-examples/index.vue'),
    children: [
      {
        path: 'swiper-full-screen',
        name: 'swiper-full-screen',
        label: '全屏滚动',
        component: () => import('@components/vue-examples/swiper-full-screen.vue'),
        meta: {
          
        }
      },
    ]
  }  
]


export const routerList = [
  {
    path: '/',
    name: 'home',
    label: '首页',
    component: () => import('@components/Home.vue'),
    children: HomeList
  },
  
];

export const router = new Router({
  routes: routerList
})
