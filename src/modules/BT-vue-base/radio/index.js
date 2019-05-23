import item from './radio-item.vue'
import group from './group.vue'



export const RadioItem = {
  install(Vue) {
    Vue.component('radio-item-vbt', item)
  }
}

export const RadioGroup = {
  install (Vue) {
    Vue.component('radio-group-vbt', group)
  }
}