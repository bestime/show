<style lang="stylus" rel="stylesheet/stylus">
.g1w5e4t5w
  background #f7f7f7
  font-size 0.42rem
  display flex
  align-items center
  justify-content center
  padding 0.3rem 0
  border-top #ddd solid 1px
  color #404040
  &.active
    background #eee
  span
    padding-left 0.2rem
</style>

<template>
  <div
    class="g1w5e4t5w"
    :class="{'active': active}"
    @touchstart="active=true"
    @touchend="active=false"
    @click="$emit('click')"
  >
    <img class="a4g8w" src="images/tuikuan.png"/>
    <span>退款</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  }
}
</script>