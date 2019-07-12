<style lang="stylus" rel="stylesheet/stylus">
@import "./theme.styl"
.button-vbt
  height 36px
  display inline-flex
  padding 2px
  box-sizing border-box
  vertical-align middle
  font-size 12px
  .button-main
    flex 1
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
      box-shadow 0 0 0 2px getActiveColor(0.2)
      background getActiveColor(0.9)
    &.default
      background #eee
      color $staticTextColor
      border $staticBorderColor solid 1px
      &:hover
        background:#f9f9f9
      &:active
        background #eee
      
.button-vbt-loading
  margin-left 5px
</style>

<template>
  <div class="button-vbt" :class="[type]" @click="click">
    <div class="button-main">
      <slot></slot>
      <div class="button-vbt-loading" v-if="doing">
        <Loading color="#fff"/>
      </div>
    </div>    
  </div>  
</template>

<script>
import Loading from './Loading.vue'
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
    isLoading () {
      return this.doing
    },
    setLoading (bol) {
      this.doing = bol ? true : false
    },
    click () {
      this.$emit('click')
    }
  },
}
</script>