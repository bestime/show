<style lang="stylus" rel="stylesheet/stylus">
@import "../theme.styl"

$switchTransition = 0.3s cubic-bezier(.25,.1,.25,1.2)
$size = 28px
$halfSize = $size / 2
$width = $size * 1.9
$diff = $width - $size
.switch-vbt
  display:inline-flex
  align-items:center
  user-select:none
  font-size:0
  text-align:left
  .slb
    font-size:12px
    color: $staticTextColor
    margin-left:5px
    display:flex
    align-items:stretch
  .vbt-cir
    width:$width
    height:$size
    border-radius:$size
    border:$staticBorderColor solid 2px
    background: $staticBorderColor
    cursor:pointer
    position:relative
    box-sizing:border-box
    .zaw
      overflow:hidden
      display:inline-flex
      align-items:center
      justify-content:center
      width:$size - 4px
      height:$size - 4px
      background: #fff
      border-radius: $halfSize
      transition:$switchTransition
      position:relative
      z-index:1
      box-shadow:0 5px 5px -1px rgba(0, 0, 0, 0.2), 0 0 0 2px $staticBorderColor
    &:before
      content: ''
      display: block
      background: #fff
      left:0
      top:0
      right:0
      bottom:0
      transform:scale(1)
      transition: $switchTransition
      border-radius:$size
      position:absolute   
      transition-delay:0.05s
  &.open
    .vbt-cir      
      border-color: getActiveColor(1)
      background: getActiveColor(1)
      .zaw
        box-shadow:0 5px 5px -1px rgba(0, 0, 0, 0.2), 0 0 0 2px getActiveColor(1)
        transform:translate3D($diff, 0, 0)				
      &:before
        transform:scale(0)
        transition-delay:0s
  &.disabled    
    opacity:0.7
    .vbt-cir
      cursor:not-allowed
</style>

<template>
  <div class="switch-vbt" :class="{'open': value==1}">    
    <div class="vbt-cir" @click="toggle"> 
			<div class="zaw">
        <Loading v-if="doing" :size='12'/>
      </div>
    </div>
    <div class="slb"><slot></slot></div>
  </div>
</template>

<script>
import Loading from '../loading/Loading.vue'
export default {
  name: 'switch-vbt',
  components: {
    Loading
  },
  props: {
    value: {
      default: false
    },
    index: {
      default: 0
    }
  },
  data () {
    return {
      doing: false,
      timer: null
    }
  },

  beforeDestroy () {
    clearTimeout(this.timer)
  },

  methods: {
    toggle () {
      this.doing = true
      const toVal = !Number(this.value)
      this.$emit('input', toVal)
      this.$emit('on-change', toVal, this.index)
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.doing = false
      }, 10000)
    },
  },

  watch: {
    value (newVal, oldVal) {
      if(newVal!==oldVal) {
        clearTimeout(this.timer)
        this.doing = false
      }
    }
  }
}
</script>