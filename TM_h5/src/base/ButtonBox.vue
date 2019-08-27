<style lang="stylus" rel="stylesheet/stylus">
$placeholderColor = #999
.tm-button-wrapper
  background #fff
  font-size 0.39rem
  display flex
  align-items center
  justify-content center
  padding 0 0.6rem
  border #dadada solid 1px
  border-radius 0.1rem
  &.active
    border-color #ffa71d
    background #f5f5f5
  &.lock
    background #f5f5f5
    border-color #dadada
  &.commit
    background #ffa71d
    border-color #ffa71d
    color #fff
    &.active
      background: #d89122
</style>

<template>
  <div
    class="tm-button-wrapper"
    :class="{
      'active': active,
      'lock': lock,
      'commit': mode === 'commit'
    }"
    @touchstart="active=true"
    @touchend="active=false"
    @click="onClick"
  >
    <span v-if="lock">再次获取 ({{count}}s)</span>
    <slot v-else></slot>
  </div>
</template>

<script>
const WAIT_TIME = 60
export default {
  props: {
    mode: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: false,
      lock: false,
      timer: null,
      count: WAIT_TIME,
    }
  },

  beforeDestroy () {
    clearInterval(this.timer)
  },

  methods: {
    onClick () {
      if(this.lock) return;
      switch(this.mode) {
        case 'message-code':
          this.$emit('click', next => {
            this.lock = true
            this.timer = setInterval(() => {
              this.count--
              if (this.count <= 0) {
                clearInterval(this.timer)
                this.lock = false
                this.count = WAIT_TIME
              }
            }, 1000) 
          })
          break;
        default:
          this.$emit('click')
      }
    }
  }
}
</script>