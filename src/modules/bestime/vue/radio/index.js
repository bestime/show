import $RadioItem from './radio-item.vue'
import $RadioGroup from './group.vue'

$RadioItem.install = function (Vue) {
  Vue.component($RadioItem.name, $RadioItem)
}

$RadioGroup.install = function (Vue) {
  Vue.component($RadioGroup.name, $RadioGroup)
}



export const RadioItem = $RadioItem
export const RadioGroup = $RadioGroup