
<style lang="stylus" rel="stylesheet/stylus">
.img-btn-wrapper
  font-size 0
  img
    width 100%
    height 100%
    display block

</style>
<template>
  <div
    class="img-btn-wrapper"
    @touchstart="active=true"
    @touchend="active=false"
    @click="$emit('click')"
    :style="useCss"
  >
    <img v-show="!active" :src="srcStatic"/>
    <img v-show="active" :src="srcActive"/>
  </div>
</template>

<script>
export default {
  props: {
    srcActive: '',
    srcStatic: '',
    width: '',
    height: ''
  },
  computed: {
    useCss () {
      let res = {}
      if(this.width) {
        res.width = this.width
      }
      if(this.height) {
        res.height = this.height
      }
      return res
    }
  },
  data () {
    return {
      active: false
    }
  }
}
</script>

