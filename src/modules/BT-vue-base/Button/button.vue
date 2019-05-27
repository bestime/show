<style lang="stylus" rel="stylesheet/stylus">
@import "../theme.styl"
.button-vbt
  user-select none
  display inline-flex
  align-items center
  justify-content center
  background getActiveColor(1)
  color #fff
  cursor pointer
  padding 0 15px
  transition:0.15s
  &:hover
    background getActiveColor(0.8)
  &:active
    background getActiveColor(1)
  &.default
    background #eee
    color $staticTextColor
    border $staticBorderColor solid 1px
    &:hover
      background:#f9f9f9
    &:active
      background #eee
  

</style>

<template>
  <div class="button-vbt" :class="[type]" @click="$emit('click')">
    <slot></slot>
    <div class="button-vbt-loading" v-if="doing">
      <Loading/>
    </div>
  </div>  
</template>

<script>
import Loading from '../loading/Loading.vue'
export default {
  name: 'button-vbt',
  components: { Loading },
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },

  data () {
    return {
      doing: false
    }
  },

  mounted() {
    
  },

  methods: {
    
  },
}
</script>