<style lang="stylus" rel="stylesheet/stylus">
.yhq-list-wrapper
  min-height 100%
  background #ededed
  box-shadow 0 0 40px rgba(0,0,0,0.5)
  overflow hidden
  .tabs
    display flex
    align-items center
    justify-content center
    background #fff
    
    border-bottom #ddd solid 1px
    
  .d12
    flex 1
    font-size 0.39rem
    text-align center
    color #4d4d4d
    position relative
    padding 0.4rem 0
    span
      display block
      border-left #ddd solid 1px
    &:nth-of-type(1)
      span
        border none
    &.active
      color #fc642e
      &:after
        content ''
        position absolute
        left 20%
        bottom 0
        right 20%
        height 1px
        background #fc642e


</style>

<template>
  <div class="yhq-list-wrapper">
    <div class="tabs">
      <div class="d12" :class="{'active': tabName==='未使用'}" @click="goTo('未使用')">
        <span>未使用</span>
      </div>
      <div class="d12" :class="{'active': tabName==='已使用'}" @click="goTo('已使用')"><span>已使用</span></div>
      <div class="d12" :class="{'active': tabName==='已过期'}" @click="goTo('已过期')"><span>已过期</span></div>
    </div>
    <div>
      <DiscountItem v-for="(item, index) in list" :key="index"/>
    </div>
  </div>
</template>

<script>
import DiscountItem from './DiscountItem'

export default {
  components: {
    DiscountItem
  },
  data () {
    return {
      list: new Array(15).fill(''),
      tabName: '未使用'
    }
  },
  beforeCreate () {
    document.title = '优惠券列表'
  },
  methods: {
    goTo (name) {
      this.tabName = name
    }
  }
}
</script>