<style lang="stylus" rel="stylesheet/stylus">
@import "../theme.styl"
.text-vbt
  vertical-align middle
  display: -webkit-box
  /* autoprefixer: off */
  -webkit-box-orient vertical
  /* autoprefixer: on */
  overflow: hidden
</style>

<template>
  <div class="text-vbt" :style="{'-webkit-line-clamp': line}">
    <slot/>
  </div>  
</template>

<script>
export default {
  name: 'text-vbt',
  props: {
    line: {
      type: [Number, String],
      default: 0
    }
  }
}
</script>