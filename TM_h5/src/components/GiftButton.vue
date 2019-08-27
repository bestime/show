<style lang="stylus" rel="stylesheet/stylus">
.b2144t56we
  display flex
  flex-direction column
  align-items center
  justify-content center
  color #4d4d4d
  padding 0 0.8rem
  border-left #ddd solid 1px
  img
    width 0.78rem
    height 0.78rem
    display none
    margin-bottom 0.2rem
  .c1
    display block
  &.active
    color #262626
    .c1
      display none
    .c2
      display block
  &.disabled
    color #999
    .c1, .c2
      display none
    .c3
      display block
</style>

<template>
  <div
    class="b2144t56we"
    :class="{
      'active': active,
      'disabled': disabled
    }"
    @touchstart="onDown"
    @touchend="onUp"
    @click="onClick"
  >
    <img class="c1" src="images/gift-01.png"/>
    <img class="c2" src="images/gift-02.png"/>
    <img class="c3" src="images/gift-03.png"/>
    <span>领取</span>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    onDown () {
      if(!this.disabled) {
        this.active = true
      }
    },
    onUp () {
      if(!this.disabled) {
        this.active = false
      }
    },
    onClick(){
      if(!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>