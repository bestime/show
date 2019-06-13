<style lang="stylus" rel="stylesheet/stylus">
h1
  display:block
</style>

<template>
  <div>
    <switch-vbt v-model="open"/>
    <button @click="customStop">{{ open ? '停止' : '开始' }}</button>
    <br>
    <div>{{ msg }}</div>
    
    <swiper-wrapper-vbt style="width:300px;height:500px;border:#000 solid 1px;">
      <swiper-item-vbt>1</swiper-item-vbt>
      <swiper-item-vbt>2</swiper-item-vbt>
      <swiper-item-vbt>3</swiper-item-vbt>
      <swiper-item-vbt>4</swiper-item-vbt>
      <swiper-item-vbt>5</swiper-item-vbt>
      <swiper-item-vbt>6</swiper-item-vbt>
      <swiper-item-vbt>7</swiper-item-vbt>
    </swiper-wrapper-vbt>
    
  </div>
</template>

<script>


var myPoll = ns.loopFunc({
	handle: function (next, stop) {
    this.msg += '每次轮询的结果：' + this.open
    
    if(this.open) {
      console.log('next：', this.open)
      next()
    }else {
      console.log('stop：', this.open)
      stop()
    }
  },
  sleepTime: 1000,
  overTime: {
    time: 5000,
    handle: function () {
      console.log('超时了', this.open)
    }
  }
})



export default {
  data () {
    return {
      open: false,
      msg: ''
    }
  },
  mounted(){    
    
  },

  methods: {
    customStop () {
      const open = this.open
      this.open = !open
      if(open) {
        myPoll.stop()
      }else {
        myPoll.start.call(this)
      }
    }
  }
}
</script>