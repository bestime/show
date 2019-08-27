<style lang="stylus" rel="stylesheet/stylus">
$placeholderColor = #999
.form-input-wrapper
  border-radius 0.1rem
  display flex
  align-items center
  font-size 0.39rem
  background #fff
  padding 0 0.4rem
  border #dadada solid 1px
  height 1.4rem
  .input-box
    flex 1
  input 
    display block
    outline none
    width 100%
    background transparent
    border none
    color #444
    &::-webkit-input-placeholder
      color $placeholderColor
    &::-moz-placeholder
      color $placeholderColor
    &::-ms-input-placeholder
      color $placeholderColor
  .img-icon
    width 0.54rem
    margin-right 0.2rem
    opacity 0.7
  &.active
    border-color #ffa71d
  &.hasValue
    .img-icon
      opacity 1
</style>

<template>
  <div class="form-input-wrapper" :class="{'active': active, 'hasValue': value}">
    <img v-if="mode==='id-card'" class="img-icon" src="images/id-card.png"/>
    <img v-if="mode==='password'" class="img-icon" src="images/mima.png"/>
    <img v-if="mode==='phone'" class="img-icon" src="images/shouji.png"/>
    <img v-if="mode==='message-code'" class="img-icon" src="images/message.png"/>
    <div class="input-box">
      <input
        ref="input"
        :placeholder="placeholder"
        :value="value"
        :type="type"
        spellcheck="false"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'text'
    },
    type: {
      type: String,
      default: 'text'
    },
    check: {
      type: Function,
      default: function (str, next) {
        switch (this.mode) {
          case 'phone':
            str = str.replace(/[^0-9]/g, '').substr(0, 11)
            break;
          case 'id-card':
            let X = str.substr(-1).replace(/[^0-9X]/g, '')
            let pre = str.substr(0, str.length-1).replace(/[^0-9]/g, '').substr(0, 17)
            if(pre.length < 17) {
              X = X.replace(/[^0-9]/, '')
            }
            str = pre + X
            break;
        }
        next(str)
      }
    }
  },
  data () {
    return {
      active: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.input = this.$refs.input
    })
  },
  methods: {
    onFocus () {
      this.active = true
    },
    onBlur () {
      this.active = false
      this.$emit('on-blur')
    },
    onInput () {
      this.check(this.input.value, toVal => {
        this.$emit('input', toVal)
        switch (this.mode) {
          case 'id-card':
            if(toVal.length===18) {
              this.input.blur()
            }
            break;
        }
        this.input.value = toVal
      })
    }
  }
}
</script>