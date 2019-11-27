<style lang="stylus" rel="stylesheet/stylus">
.drawer-vbt
  position fixed
  left 0
  right 0
  bottom 0
  top 0
  z-index 50
  display none
  &.opened
    display flex
  .drawer-content
    position absolute
    transition 0.2s ease-out
    overflow auto
    -webkit-overflow-scrolling touch
    box-shadow 0 0 20px rgba(0,0,0,0.2)
  &.dir-right
    .drawer-content
      right 0
      top 0
      bottom 0
      left 15%
      background #fff
      transform translateX(100%)
  &.dir-center
    align-items center
    justify-content center
    .drawer-content
      transition 0.2s cubic-bezier(0.245, 0.890, 0.175, 1.210)
      position relative
      z-index 20
      display inline-block
      background transparent
      opacity 0
      transform scale(0.7)
      box-shadow 0 0 20px rgba(0,0,0,0.5)
  .drawer-bg
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    background rgba(0,0,0,0.3)
    opacity 0
    transition 0.2s
  &.active
    .drawer-bg
      opacity 1
    &.dir-right
      .drawer-content
        transform translateX(0)
    &.dir-center
      .drawer-content
        transform scale(1)
        opacity 1
</style>

<template>
  <div ref="wrapper" class="drawer-vbt" :class="getClass()">
    <div class="drawer-bg" @click="close"></div>
    <div class="drawer-content">
      <slot/>
    </div> 
  </div>  
</template>

<script>

export default {
  name: 'drawer-vbt',
  props: {
    direction: {
      type: String,
      default: 'right'
    },
    maskclose: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      active: false,
      opened: false
    }
  },
  
  methods: {
    getClass () {
      let dirClass = ''
      switch (this.direction) {
        case 'right':
          dirClass = 'dir-right'
          break;
        case 'center':
          dirClass = 'dir-center'
          break;
      }
      return [
        dirClass,
        this.active ? 'active' : '',
        this.opened ? 'opened' : ''
      ]
    },

    show () {
      if(!this.maskclose) return
      this.opened = true
      setTimeout(() => {
        this.active = true
      }, 30)
    },

    close () {
      this.active = false
      setTimeout(() => {
        this.opened = false
        this.$emit('on-closed')
      }, 200)
    }
  },
}
</script>