<style lang="stylus" rel="stylesheet/stylus">

</style>

<template>
  <div class="dialog-eg">
    <button-vbt @click="show01">测试</button-vbt>
  </div>
</template>

<script>
import { isPhone } from '@npm/bestime/js'
export default {
  data () {
    return {
    }
  },
  mounted(){    
    
  },

  methods: {
    show01 () {
      ns.dialog({
        msg: new Array(1).fill('这是消息').join('<br/>'),
        onShow: function () {
          console.log('显示了')
        },
        startClose: function (next, type) {
          console.log('关闭前操作：', type)
          setTimeout(function () {
            next(true, '有什么失败了')
          }, 1000)          
        },
        closed: function (type) {
          console.log('关闭了', type)
        },
        autoClose: 21230
      })
    }
  }
}
</script>