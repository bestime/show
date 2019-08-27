
<style lang="stylus" rel="stylesheet/stylus">
.recharge-wrapper
  min-height 100%
  background #ededed
  box-shadow 0 0 40px rgba(0,0,0,0.5)
  display flex
  flex-direction column
.a154sewe7t
  display flex
  align-items center
  justify-content space-between
  font-size 0.39rem
  background #fff
  padding 0.4rem
  border-bottom #ddd solid 1px
.s15zzzz15e
  flex 1
  position relative
.bs154e5t
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  overflow auto
  overflow-x hidden
  -webkit-overflow-scrolling: touch
.one-lks
  background #fff
  margin 0.4rem
  border #eee solid 1px
  .as12e
    display flex
    align-items flex-end
    font-size 0.39rem
    padding 0.4rem
    position relative
    border-bottom #f2f2f2 solid 1px
  .as155478
    font-size 0.54rem
    color #fc642e
  .as1d545we7
    width 0.76rem
    position absolute
    right 0.4rem
    top 50%
    transform translateY(-50%)
    display none
  &.active
    border-color #ffa71d
    .as1d545we7
      display block
    .as12e
      background #fffcf6
.as15e4wq5645
  font-size 0.39rem
  color #4c4c4c
.gwe4ew4r5
  display flex
  align-items stretch
.nkwe545
  background #fff
.a4587we
  flex 1
  border-top #eee solid 1px
  padding-left 0.2rem
  span
    display inline-block
    vertical-align middle
    font-size 0.39rem
.gew6545
  display flex
  align-items center
  justify-content space-between
  padding 0.4rem
  border-top #eee solid 1px
</style>

<template>
  <div class="recharge-wrapper">
    <div class="a154sewe7t">
      <span style="color:#4c4c4c">当前余额</span>
      <span style="color:#fc642e">493.63</span>
    </div>
    <div class="s15zzzz15e">
      <div class="bs154e5t">
        <div class="one-lks" @click="activeIndex=index" :class="{'active': activeIndex===index}" v-for="(item, index) in list" :key="index">
          <div class="as12e">
            <span style="color:#fc642e">￥</span>
            <span class="as155478">2350.13</span>
            <span style="padding-left:0.2rem">充值后将可获得</span>
            <img class="as1d545we7" src="images/cjk5e.png"/>
          </div>
          <div style="padding: 0.4rem">
            <SwiperAward/>
          </div>
        </div>
      </div>
    </div>
    <div class="nkwe545">
      <div class="gew6545">
        <span class="as15e4wq5645">充值数量{{czNum}}</span>
        <NumberInput v-model="czNum" style="width:2.5rem"/>
      </div>
      <div class="gwe4ew4r5">
        <div class="a4587we">
          <span style="padding-right:0.2rem;">订单金额</span>
          <span style="color:#fc642e;"> ￥20.36</span>
        </div>
        <ButtonBox mode="commit" style="height:1.4rem;border-radius:0">立即充值</ButtonBox>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBox from '@base/ButtonBox'
import NumberInput from '@base/NumberInput'
import SwiperAward from './SwiperAward'
export default {
  components: {
    ButtonBox,
    SwiperAward,
    NumberInput
  },
  data () {
    return {
      list: new Array(15).fill('').map((item, index) => {
        return {
          checked: false
        }
      }),
      activeIndex: 0,
      czNum: 0
    }
  },
  beforeCreate () {
    document.title = '充值'
  },
  methods: {
    
  }
}
</script>