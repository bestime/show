import wrapper from './swiper-wrapper.vue'
import item from './scroll-item.vue'



export const SwiperWrapper = {
  install(Vue) {
    Vue.component('vbt-swiper-wrapper', wrapper)
  }
}

export const SwiperItem = {
  install (Vue) {
    Vue.component('vbt-swiper-item', item)
  }
}
