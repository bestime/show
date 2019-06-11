import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import dataConfig from './dataConfig'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

const getters = {}
const state = {}
const mutations = {}
const actions = {}


dataConfig.forEach(item => {
  // 数据仓库
  state[item.dataName] = item.data
  // 获取数据
  getters[item.dataName] = () => state[item.dataName]
  // 改变数据
  mutations[`set_${item.dataName}`] = item.mutation
  // 发起修改
  actions[`do_${item.dataName}`] = ({commit}, value) => {    
    commit(`set_${item.dataName}`, value)
  }
})


export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})