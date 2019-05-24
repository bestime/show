import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export const HomeList = [
  {
    path: '/vue',
    name: 'vue',
    label: 'vue',
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
      {
        path: 'Switch',
        name: 'Switch',
        label: 'Switch',
        component: () => import('@components/vue-examples/switch-eg.vue')
      },
      {
        path: 'Image',
        name: 'Image',
        label: 'Image',
        component: () => import('@components/vue-examples/image-eg.vue')
      },
      {
        path: 'Radio',
        name: 'Radio',
        label: 'Radio',
        component: () => import('@components/vue-examples/radio-eg.vue')
      },
      {
        path: 'Input',
        name: 'Input',
        label: 'Input',
        component: () => import('@components/vue-examples/input-eg.vue')
      },
    ]
  },
  {
    path: '/js',
    name: 'js',
    label: 'javascript',
    component: () => import('@components/vue-examples/index.vue'),
    children: [
      
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
  {
    path: '*',
    name: '404',
    component: () => import('@components/Page404.vue')
  }
  
];

export const router = new Router({
  routes: routerList
})
