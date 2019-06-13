
<style lang="stylus" rel="stylesheet/stylus">
@import "../theme.styl"
.checkbox-vbt
  display inline-flex
  vertical-align middle
  align-items center
  cursor pointer
  box-size border-box
  user-select none
  &.active
    .ckv-icon
      border-color getActiveColor(1)
      background getActiveColor(1)
  &.circle
    .ckv-icon
      border-radius 50%

.ckv-content
  display flex
  align-items center
  color $staticTextColor
.ckv-icon
  border $staticBorderColor solid 1px
  width 16px
  height 16px
  color #fff
  overflow hidden
  margin-right 3px
  span
    font-size 14px
</style>
<template>
  <div class="checkbox-vbt" :style="{'font-size': `${size}px`}" :class="useClass" @click="toggle">
    <div class="ckv-icon iconfont">{{ value ? '&#xe747;' : '' }}</div>
    <div class="ckv-content"><slot/></div>
  </div>  
</template>

<script>
export default {
  name: 'checkbox-vbt',
  props: {
    size: {
      type: Number,
      default: 14
    },
    value: null,
    type: {
      type: String,
      default: ''
    }
  },

  computed: {
    useClass () {
      return {
        'active': this.value,
        'circle': this.type === 'circle'
      }
    }
  },

  methods: {
    toggle () {
      const toVal = !this.value
      this.$emit('input', toVal)
      this.$emit('on-change', toVal)
    }
  }
}
</script>