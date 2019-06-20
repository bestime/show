<style lang="stylus" rel="stylesheet/stylus">
</style>

<template>
  <div style="padding:20px;">
    <switch-vbt v-model="isLogin">是否登录，切换状态进行轮询测试</switch-vbt>
    <br/>
    <br/>
    <br/>
    <button-vbt @click="test01">{{ polling ? '停止轮询': '轮询是否登录' }}</button-vbt>
    <ul>
      <li v-for="(item, index) in msg" :key="index" v-html="item"></li>
    </ul>
  </div>
</template>

<script>
import { loopFunc } from '@bestime/js'
const loop01 = loopFunc({
  sleepTime: 500,
  handle: function (next, stop, times) {
    this.msg.push(`<div style="color:${this.isLogin ? 'green': 'red'}">第${times}次结果：${this.isLogin ? '登录成功' : '未登录'}</div>`)
    if(this.isLogin) {
      stop()
      this.polling = false
      ns.dialog({ msg: '登录成功' })
    }else {
      next()
    }
  },
  overTime: {
    time: 5000,
    handle: function () {
      this.polling = false
      ns.dialog({ msg: '获取登录状态超时' })
    }
  }
})
export default {
  data () {
    return {
      isLogin: false,
      msg: [],
      polling: false
    }
  },

  methods: {
    test01 () {
      if(this.polling) {
        this.polling = false
        loop01.stop.call(this)
      } else {
        this.polling = true
        this.msg = []
        loop01.start.call(this)
      }
    }
  }
}
</script>