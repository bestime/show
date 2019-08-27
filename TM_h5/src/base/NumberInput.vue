<style lang="stylus" rel="stylesheet/stylus">
.tm-number-input
  display flex
  align-items stretch
  font-size 0
  user-select none
  box-sizing border-box
  .tmn-btn
    width 0.66rem
    height 0.66rem
    img
      display block
      width 100%
      height 100%
      margin 0
  .n-ipt-box
    flex 1
    display flex
    align-items center
    justify-content center
    input
      width 100%
      font-size 0.48rem
      text-align center
      color #4c4c4c
      outline none
</style>

<template>
  <div class="tm-number-input">
    <div class="tmn-btn" @click="subtract" @touchstart="leftDown=true" @touchend="leftDown=false">
      <img v-if="leftDown" src="images/jian-active.png"/>
      <img v-else src="images/jian.png"/>
    </div>
    <div class="n-ipt-box">
      <input :value="value" ref="input" @input="onInput"/>
    </div>
    <div class="tmn-btn" @click="add" @touchstart="rightDown=true" @touchend="rightDown=false">
      <img v-if="rightDown" src="images/add-active.png"/>
      <img v-else src="images/add.png"/>
    </div>
  </div>
</template>

<script>
function cvtNumber (data) {
  data = Number(data)
  if(isNaN(data)) {
    data = 0
  }
  return data
}
export default {
  props: {
    value: {
      type: [Number, String],
      default: 0
    }
  },
  data () {
    return {
      input: '',
      leftDown: false,
      rightDown: false
    }
  },
  mounted () {
    this.input = this.$refs.input
  },
  methods: {
    onInput () {
      let toVal = ns.symbolNumber(this.input.value, false)
      this.changeValue(toVal)
      this.$emit('input', toVal)
    },
    changeValue (val) {
      this.$emit('input', val)
      this.input.value = val
    },

    add () {
      let toVal = ns._Number(ns.symbolNumber(this.input.value, false))
      toVal++
      this.changeValue(toVal)
    },

    subtract () {
      let toVal = ns._Number(ns.symbolNumber(this.input.value, false))
      toVal--
      this.changeValue(toVal)
    }
  }
}
</script>