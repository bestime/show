import wrapper from './swiper-wrapper.vue'
import item from './scroll-item.vue'



export const SwiperWrapper = {
  install(Vue) {
    Vue.component(wrapper.name, wrapper)
  }
}

export const SwiperItem = {
  install (Vue) {
    Vue.component(item.name, item)
  }
}
