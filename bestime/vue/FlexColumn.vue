
<style lang="stylus" rel="stylesheet/stylus">
.flex-column-vbt
  flex 1
  position relative  
.flex-column-vbt-content
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  overflow auto
  -webkit-overflow-scrolling touch
</style>

<template>
  <div class="flex-column-vbt">
    <div class="flex-column-vbt-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flex-column-vbt'
}
</script>