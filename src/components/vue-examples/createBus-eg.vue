<style lang="stylus" rel="stylesheet/stylus">
.sddeted2e
  display flex
  & > div
    flex 1
    margin:10px
  .ete1dw5
    display flex
    align-items:center
    justify-content center
    flex-direction column
  .tishi
    padding 10px
    font-size:12px
    background:#f9f9f9
    color:#999
</style>

<template>
  <div>
    <button-vbt @click="tongzhi">通知</button-vbt>
    <button-vbt @click="clearPageBus">清空所有</button-vbt>

    <div class="sddeted2e">
      <div>
        <div class="ete1dw5">
          <span>01 多次执行</span>
          <button @click="do01">bus.on('test', handle)</button>
        </div>
        <div class="tishi" v-html="msg01"></div>
      </div>

      <div>
        <div class="ete1dw5">
          <span>02 多次执行</span>
          <button @click="do02">bus.on('test', handle)</button>
        </div>
        <div class="tishi" v-html="msg02"></div>
      </div>

      <div>
        <div class="ete1dw5">
          <span>03 执行一次</span>
          <button @click="do03">bus.once('test', handle)</button>
        </div>
        <div class="tishi" v-html="msg03"></div>
      </div>

      <div>
        <div class="ete1dw5">
          <span>04 唯一方法-多次执行</span>
          <button @click="do04">bus.one('唯一方法名', handle)</button>
        </div>
        <div class="tishi" v-html="msg04"></div>
      </div>

      <div>
        <div class="ete1dw5">
          <span>05 唯一方法-执行一次</span>
          <button @click="do05">bus.oneonce('唯一方法名', handle)</button>
        </div>
        <div class="tishi" v-html="msg05"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { createBus } from '@bestime/js'
const bus = createBus()
window.bus03 = bus
export default {
  data () {
    return {
      msg01: '请先绑定',
      msg02: '请先绑定',
      msg03: '请先绑定',
      msg04: '请先绑定',
      msg05: '请先绑定'
    }
  },

  beforeDestroy () {
    this.clearPageBus()
  },

  methods: {
    do01 () {
      this.msg01 = '绑定成功'
      bus.clear(this.bus01)
      this.bus01 = bus.on('test', (data) => {
        this.msg01 += `<br/>${data}`
      }, 'page-createBus')
    },

    do02 () {
      this.msg02 = '绑定成功'
      bus.clear(this.bus02)
      this.bus02 = bus.on('test', (data) => {
        this.msg02 += `<br/>${data}`
      })
    },

    do03 () {
      this.msg03 = '绑定成功'
      bus.clear(this.bus03)
      this.bus03 = bus.once('test', (data) => {
        this.msg03 += `<br/>${data}`
      })
    },

    do04 () {
      this.msg04 = '绑定成功'
      bus.clear(this.bus04)
      this.bus04 = bus.one('唯一方法名', (data, name) => {
        this.msg04 += `<br/>${data}`
      })
    },

    do05 () {
      this.msg04 += `<br/>被05覆盖` 
      this.msg05 = '绑定成功'
      bus.clear(this.bus05)
      this.bus05 = bus.oneonce('唯一方法名', (data, name) => {
        this.msg05 += `<br/>${data}`
      })
    },

    clearPageBus () {
      bus.clear(this.bus01)
      bus.clear(this.bus02)
      bus.clear(this.bus03)
      bus.clear(this.bus04)
      bus.clear(this.bus05)
    },

    tongzhi () {      
      console.log('bus', bus._events)
      bus03.emit('test', '下发的数据')
      bus03.emit('唯一方法名', '唯一方法')
    }
  }
}
</script>