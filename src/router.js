import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export const HomeList = [
  {
    path: '/index',
    name: '首页',
    label: '首页',
    component: () => import('@components/Home.vue')
  },
  {
    path: '/js',
    name: 'js',
    label: 'javascript',
    component: () => import('@components/vue-examples/js-index.vue'),
    children: [      
      {
        path: 'dialog',
        name: 'dialog',
        label: '弹框',
        component: () => import('@components/vue-examples/dialog-eg.vue')
      },
      {
        path: 'dom-on-bottom',
        name: 'dom-on-bottom',
        label: 'pc滚动到底部加载',
        component: () => import('@components/vue-examples/scroll-bottom-eg.vue')
      },
      {
        path: 'loopFunc',
        name: 'loopFunc',
        label: '轮询',
        component: () => import('@components/vue-examples/loopFunc-eg.vue')
      },
      {
        path: 'excel',
        name: 'excel',
        label: '导出Excel',
        component: () => import('@components/vue-examples/excel-eg.vue')
      },
      {
        path: 'drag',
        name: 'drag',
        label: '拖拽',
        component: () => import('@components/vue-examples/drag-eg.vue')
      },
      // {
      //   path: 'code',
      //   name: 'code',
      //   label: 'code',
      //   component: () => import('@components/vue-examples/code-eg.vue')
      // },
      {
        path: 'gwc',
        name: 'gwc',
        label: '抛物线',
        component: () => import('@components/vue-examples/gwc-eg.vue')
      },
      {
        path: 'createBus',
        name: 'createBus',
        label: 'createBus',
        component: () => import('@components/vue-examples/createBus-eg.vue')
      },
    ]
  },
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
      {
        path: 'Select',
        name: 'Select',
        label: 'Select',
        component: () => import('@components/vue-examples/select-eg.vue')
      },
      {
        path: 'CheckBox',
        name: 'CheckBox',
        label: 'CheckBox',
        component: () => import('@components/vue-examples/checkbox-eg.vue')
      },
    ]
  },
  
]

export const routerList = [
  {
    path: '/',
    redirect: '/index',
    name: 'home',
    label: '右侧路由容器',    
    component: () => import('@components/RightRouterWrapper.vue'),
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