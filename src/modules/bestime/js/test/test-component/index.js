
import TestComponent from './index.vue'

TestComponent.install = function (Vue) {
  Vue.component(TestComponent.name, TestComponent)
}
export default 'test-component-cc'