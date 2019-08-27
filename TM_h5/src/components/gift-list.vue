<style lang="stylus" rel="stylesheet/stylus">
.gift-list-wrapper
  min-height 100%
  background #ededed
  box-shadow 0 0 40px rgba(0,0,0,0.5)
  overflow hidden
  .dw457
    padding 0.2rem 0.4rem
    font-size 0.39rem
    background #f7f7f7
    color #808080
    border-bottom #ddd solid 1px
    display flex
    align-items center
    justify-content space-between
  .v15s
    border #ddd solid 1px
    border-left none
    border-right none
    background #fff
    margin 0.2rem 0
  .miow15
    padding 0.4rem 0 0.4rem 0.4rem
    font-size 0.39rem
    display flex
    align-items stretch
    justify-content center
  .ase88
    width 1.8rem
    height 1.8rem
    background #f9f9f9
    border none
    margin-right 0.2rem
  .bddd545
    font-size 0.45rem
    color #4c4c4c
    overflow hidden
    text-overflow ellipsis
    display -webkit-box
    -webkit-line-clamp 2
    line-height normal
    -webkit-box-orient vertical
  .d4ew78
    flex 1
    display flex
    flex-direction column
    justify-content space-between
    margin-right 0.4rem
  .bkoow
    font-size 0.27rem
    color #808080
</style>

<template>
  <div class="gift-list-wrapper">
    <ul>
      <li class="v15s" v-for="(item, index) in list" :key="index">
        <div class="dw457">
          <div class="gf_time">2018-07-11 12:56:30</div>
          <div class="nnkjekt">魔力卡</div>
        </div>
        <div class="miow15">
          <img class="ase88"/>
          <div class="d4ew78">
            <div class="bddd545">TM棒棒糖网咖自制蜂蜜柚子茶300mlTM棒棒糖网咖自制蜂蜜柚子茶300ml(中杯)</div>
            <div class="bkoow">请在TM棒棒糖网咖领取</div>
          </div>
          <GiftButton :disabled="index%2 ? true : false"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import GiftButton from './GiftButton'
export default {
  components: {
    GiftButton
  },
  data () {
    return {
      list: new Array(15).fill('')
    }
  },
  beforeCreate () {
    document.title = '礼品列表'
  },
  methods: {

  }
}
</script>