import './common.styl'
import '../font/iconfont.css'
import { _Array } from '../js'

export default function BestimeVueBaseInstall (Vue, components) {
  _Array(components).forEach(item => {
    item.install = v => v.component(item.name, item)
    Vue.use(item)
  })
}