<style lang="stylus" rel="stylesheet/stylus">
@import "../theme.styl"
.radio-item-vbt
  display inline-flex
  align-items:center
  cursor pointer
  .radio-cir
    border $staticBorderColor solid 1px
    box-sizing border-box
    position relative
    display flex
    align-items center
    justify-content center
    &:after
      content ''
      position absolute
      left 2px
      right 2px
      top 2px
      bottom 2px
      background getActiveColor(1)
      transform scale(0)
      transition:0.2s
  &.checked
    .radio-cir
      border-color getActiveColor(1)
      &:after
        transform scale(1)
  &.circle
    .radio-cir
      border-radius: 50%
      &:after
        border-radius: 50%

.radio-content
  font-size 12px
  margin-left 3px
  color $staticTextColor
</style>

<template>
  <div class="radio-item-vbt" :class="{'circle':type==='circle', 'checked': checked}" @click="toggle">
    <div class="radio-cir" :style="css_cir">
    </div>
    <div class="radio-content">
      <slot></slot>
    </div>
  </div>  
</template>

<script>
import { findComponentUpward } from '../vue-tool'
export default {
  name: 'radio-item-vbt',
  props: {
    value: {
      default: false
    },
    index: {
      type: Number,
      default: 0
    },  
    size: {
      type: Number,
      default: 16
    },
    groupkey: {
      default: null
    },
    type: {
      type: String,
      default: 'circle'
    }
  },
  data () {
    return {
      groupVal: null,
      groupMode: false,
      father: findComponentUpward(this, 'radio-group-vbt')
    }
  },
  computed: {
    checked () {
      if(this.groupMode) {// 单选组模式
        return this.groupkey===this.groupVal
      } else {
        return Number(this.value)
      }
      
    },
    css_cir () {
      const size = `${this.size}px`
      return {
        width: size,
        height: size
      }
    }
  },


  methods: {
    toggle () {
      if(this.groupMode) return this.emitFather(this.groupkey);
      if(this.checked) return;
      const toVal = !this.checked
      this.$emit('input', toVal)
      this.$emit('on-change', toVal, this.index)
    },

    emitFather (toVal) {
      if(this.father) {
        this.father.updateChild(toVal)
      }
    }
  }
}
</script>