<style lang="stylus" rel="stylesheet/stylus">
@import "../theme.styl"

$switchTransition = 0.3s cubic-bezier(.25,.1,.25,1.2)
$size = 28px
$halfSize = $size / 2
$width = $size * 1.9
$diff = $width - $size
.vbt-switch
  display:inline-flex
  align-items:center
  user-select:none
  box-sizing:border-box
  .slb
    font-size:16px
    color: $staticTextColor
    margin-left:5px
  .vbt-cir
    width:$width
    height:$size
    border-radius:$size
    border:$staticBorderColor solid 2px
    background: $staticBorderColor
    cursor:pointer
    position:relative
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
      box-sizing:border-box
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
  <div class="vbt-switch" :class="{'open': value}" @click="toggle">    
    <div class="vbt-cir"> 
			<div class="zaw"></div>     
    </div>
    <div class="slb"><slot></slot></div>
  </div>
</template>

<script>

export default {
  name: 'vbt-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    toggle () {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    }
  }
}
</script>