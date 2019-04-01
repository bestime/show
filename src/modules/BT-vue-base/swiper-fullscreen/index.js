import wrapper from './swiper-wrapper.vue'
import item from './scroll-item.vue'



export const SwiperWrapperVbt = {
  install(Vue) {
    Vue.component('SwiperWrapperVbt', wrapper)
  }
}

export const SwiperItemVbt = {
  install (Vue) {
    Vue.component('SwiperItemVbt', item)
  }
}
