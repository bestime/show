import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



export const routerList = [ 
  {
    path: '/router-list',
    name: '路由汇总',
    component: () => import('@components/router-list.vue')
  },
  {
    path: '/bind-user',
    name: '绑定用户',
    component: () => import('@components/bind-user.vue')
  },
  {
    path: '/bar-home',
    name: '首页',
    component: () => import('@components/bar-home.vue')
  },
  {
    path: '/recharge',
    name: '充值',
    component: () => import('@components/recharge.vue')
  },
  {
    path: '/xia-ji',
    name: '下机',
    component: () => import('@components/xia-ji.vue')
  },
  {
    path: '/lock-screen',
    name: '挂机锁屏',
    component: () => import('@components/lock-screen.vue')
  },
  {
    path: '/ji-fen',
    name: '积分明细',
    component: () => import('@components/ji-fen.vue')
  },
  {
    path: '/yu-e',
    name: '余额明细',
    component: () => import('@components/yu-e.vue')
  },
  {
    path: '/gift-list',
    name: '礼品列表',
    component: () => import('@components/gift-list.vue')
  },
  {
    path: '/discount-list',
    name: '优惠券列表',
    component: () => import('@components/discount-list.vue')
  },
  {
    path: '/nearby-chain',
    name: '附近连锁店',
    component: () => import('@components/nearby-chain.vue')
  },
  {
    path: '/info-edit',
    name: '信息编辑',
    component: () => import('@components/info-edit.vue')
  },
];

export const router = new Router({
  routes: routerList
})





