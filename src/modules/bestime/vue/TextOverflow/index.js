import TextOverflow from './text.vue'

TextOverflow.install = function (Vue) {
  Vue.component(TextOverflow.name, TextOverflow)
}

export default TextOverflow