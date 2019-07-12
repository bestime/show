<style lang="stylus" rel="stylesheet/stylus">
</style>

<template>
  <div style="padding:20px;">
    <switch-vbt v-model="isLogin">是否登录，切换状态进行轮询测试</switch-vbt>
    <br/>
    <br/>
    <br/>
    <button-vbt @click="test01">轮询是否登录</button-vbt>
    <button-vbt @click="test01stop">停止轮询</button-vbt>
    <ul>
      <li v-for="(item, index) in msg" :key="index" v-html="item"></li>
    </ul>
  </div>
</template>

<script>
import { FunctionLoop, dialog } from '@bestime/js'

export default {
  data () {
    return {
      isLogin: false,
      msg: [],
      polling: false
    }
  },

  beforeDestroy () {
    this.test01(false)
  },

  methods: {
    test01: FunctionLoop({
      sleepTime: 500,
      handle: function (next, stop, times) {
        this.msg.push(`<div style="color:${this.isLogin ? 'green': 'red'}">第${times}次结果：${this.isLogin ? '登录成功' : '未登录'}</div>`)
        if(this.isLogin) {
          stop()
          this.polling = false
          dialog({ msg: '登录成功' })
        }else {
          console.log('继续')
          next()
        }
      },
      overTime: {
        time: 5000,
        handle: function () {
          this.polling = false
          dialog({ msg: '获取登录状态超时' })
        }
      }
    }),

    test01stop () {
      this.test01(false)
    }
  }
}
</script>