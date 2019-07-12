<style lang="stylus" rel="stylesheet/stylus">
@import "./theme.styl"
.drawer-vbt
  position fixed
  left 0
  right 0
  bottom 0
  top 0
  z-index 50
  display none
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
    }
  },

  data () {
    return {
      active: false
    }
  },

  mounted() {
  },
  
  methods: {
    getClass () {
      let dirClass = ''
      switch (this.direction) {
        case 'right':
          dirClass = 'dir-right'
          break;
      }
      return [
        dirClass,
        this.active ? 'active' : ''
      ]
    },

    show () {
      this.$refs.wrapper.style.display = 'block'
      setTimeout(() => {
        this.active = true
      }, 30)
    },

    close () {
      this.active = false
      setTimeout(() => {
        this.$refs.wrapper.style.display = 'none'
      }, 200)
    }
  },
}
</script>