<style lang="stylus" rel="stylesheet/stylus">
@import "../theme.styl"
.input-left, .input-right
  display flex
  align-items stretch
  justify-content center
  font-size 12px
  color $staticTextColor
  background #f9f9f9 
  position relative
  z-index: 5 
.input-left
  border $staticBorderColor solid 1px
  border-right none
.input-bd
  display flex
  align-items stretch
  justify-content center
  box-sizing border-box
  height 100%
  
.input-vbt
  flex 1
  display:flex
  background:#fff
  position:relative  
  transition:0.2s  
  box-sizing:border-box
  border-radius:$borderRadius
  position:relative
  box-sizing border-box
  border $staticBorderColor solid 1px
  align-items stretch
  &.no-right-bd
    margin-right -1px
  ::-webkit-input-placeholder
    color $staticDisabledColor
  &.focus, &:hover
    border-color getActiveColor(1)    
    .it-del
      display flex
      border-radius: 0 $borderRadius $borderRadius 0
  &.focus
    box-shadow 0 0 0 2px getActiveColor(0.2)
    z-index: 6
    &.warning
      box-shadow 0 0 0 2px getWarningColor(0.2)
  &.warning    
    border-color getWarningColor(1)
    color getWarningColor(1)  
  input
    border none
    transition:0.2s
    flex: 1
    resize:none
    outline:none
    background:none
    display:block
    width:100%
    min-height:100%
    margin:0    
    box-sizing:border-box
    color $staticTextColor
    padding 0 5px
  .iptbtn
    border-radius:0 $borderRadius $borderRadius 0
  .input-msg
    position absolute
    left 0
    right 0
    top 100%
    font-size 12px
    color $staticTextColor
    text-align:justify
    line-height 1.6
    background #fff
    box-shadow 0 0 5px rgba(0,0,0,0.2)
    padding 5px 10px
    margin-top 5px
    border-radius $borderRadius
    z-index: 2
    max-height 200px
    overflow-y auto
    overflow-x hidden  
    transform-origin top  
.input-content
  display flex
  align-items center
  position: relative
  flex 1
  .it-del
    position absolute
    right 0
    top 0
    bottom 0
    align-items center
    justify-content center
    padding 0 5px
    cursor pointer
    display none
    height 100%
    background rgba(255,255,255,0.8)
    &:hover      
      svg
        fill #666 !important
.input-r-btn
  background getActiveColor(1)
  color #fff
  display flex
  align-items center
  justify-content center
  font-size 12px
  padding 0 10px
  cursor pointer
  transition 0.1s
  user-select none
  border-radius 0 $borderRadius $borderRadius 0
  &:active
    background getActiveColor(0.7)
.input-box-vbt
  padding 2px
  box-sizing border-box
  height:36px
  display inline-flex
  &.disabled    
    .input-vbt
      background #f9f9f9
      &:hover
        border-color $staticBorderColor
    input 
      cursor not-allowed
    .it-del
      display none !important

</style>

<template>
  <div class="input-box-vbt" :class="[{'disabled': hasProp(disabled)}]">
    <div class="input-bd">
      <div class="input-left" v-if="$slots.left"><slot name="left"/></div>
      <div class="input-vbt" :class="[!showType ? '' : msgType, {'focus': isFocus, 'no-right-bd': $slots.right}]">
        <div class="input-content">
          <input
            ref="input"
            :value="value"
            spellcheck="false"      
            @blur="onBlur"
            @focus="onFocus"
            :placeholder="usePlaceHolder"
            @keyup.enter="onEnter"
            @keyup="onValueChange"
            :disabled="hasProp(disabled)"
          />
          <div class="it-del" @click="onCheck(null)" v-if="value">
            <icon-vbt type="delete" color="#ddd"/>
          </div>        
        </div>
        <transition name="top_hide">
          <div v-if="showMsg" class="input-msg">{{ msg }}</div>
        </transition>      
      </div>
      <div class="input-right" v-if="$slots.right"><slot name="right"/></div>
    </div> 
  </div>
</template>

<script>

import { hasProp } from '../vue-tool'
export default {
  name: 'input-vbt',
  props: {
    value: null,
    placeholder: '',
    // 自定义过滤方法
    checkFunc: {
      type: Function,
      default: val => val
    },

    disabled: null
  },
  data () {
    return {
      isFocus: false,
      msg: 'abc',
      msgType: ''
    }
  },
  mounted() {
    this.onCheck(this.value)
    console.log('slot', this.$slots)
  },
  computed: {
    usePlaceHolder () {
      return this.isFocus ? null : this.placeholder
    },
    showMsg () {
      return this.isFocus && this.showType && this.msgType
    },
    showType () {
      return this.value!=='' && this.msg !==''
    },
  },
  methods: {
    hasProp,
    setFocus (boolean) {
      console.log('111111', boolean)
      if(boolean) {
        this.$refs.input.focus()
      } else {
        this.$refs.input.blur()
      }
    },

    onFocus () {
      this.isFocus = true
    },

    onBlur () {
      this.isFocus = false
      this.onCheck(this.getValue())
    },

    getValue () {
      return this.$refs.input.value
    },

    onEnter () {
      this.$emit('on-enter', this.getValue())
    },

    onValueChange () {
      this.onCheck(this.getValue())
    },

    onCheck (oldVal) {
      const toVal = this.checkFunc(oldVal, (msgType, msg) => {
        if(msgType=== '' || typeof msgType==='undefind') {
          this.msgType = null
          this.msg = null
        } else {
          this.msgType = msgType
          this.msg = msg
        }        
      })
      this.$refs.input.value = toVal
      this.$emit('input', toVal)
    }
  },
  watch: {
    value (newVal) {
      if(newVal===this.getValue()) return;
      this.onCheck(newVal) 
    }
  },
}
</script>