<style lang="stylus" rel="stylesheet/stylus">
$placeholderColor = #999
.tm-tx-wrapper
  .tmtx-box
    height 2.6rem
    width 2.6rem
    position relative
  .tx-outer
    display block
    height 100%
    position absolute
    left 50%
    transform translateX(-50%)
  .user-tx
    position absolute
    width 2.1rem
    height 2.1rem
    left 50%
    transform translateX(-50%)
    top 5%
    border-radius 50%
</style>

<template>
  <div class="tm-tx-wrapper">
    <div class="tmtx-box">
      <img class="user-tx" src="images/mkd.png"/>
      <img :src="tximg" class="tx-outer"/>
    </div>
  </div>
</template>

<script>

const map = [
  { label: '黑铁', icon: 'lv1.png' },
  { label: '黄铜', icon: 'lv2.png' },
  { label: '白银', icon: 'lv3.png' },
  { label: '黄金', icon: 'lv4.png' },
  { label: '铂金', icon: 'lv5.png' },
  { label: '钻石', icon: 'lv6.png' },
  { label: '青冠', icon: 'lv7.png' },
  { label: '银冠', icon: 'lv8.png' },
  { label: '金冠', icon: 'lv9.png' }
]

export default {
  props: {
    level: {
      type: String,
      default: '黑铁'
    }
  },

  computed: {
    tximg () {
      let item = map.find(d => d.label===this.level)
      return `images/${item.icon}`
    }
  },
  data () {
    return {
      
    }
  },



  beforeDestroy () {
    clearInterval(this.timer)
  },

  methods: {
    
  }
}
</script>