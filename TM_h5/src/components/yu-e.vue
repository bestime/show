
<style lang="stylus" rel="stylesheet/stylus">
.ye-wrapper
  min-height 100%
  background #ededed
  box-shadow 0 0 40px rgba(0,0,0,0.5)
  overflow hidden
  .sd154t
    .cnts
      font-size 0.39rem
      display flex
      align-items center
      .prefx
        flex 1
    li
      background white
      margin 0.2rem 0
      border #ddd solid 1px
      border-left none
      border-right none
    .a4g8w
      width 0.72rem
      height 0.66rem
    
  .dtew
    .cnts
      line-height 1.7
      padding 0.2rem
    .b1s2e52
      color #404040
      font-weight bold
  .as4xcccc
    .dwdv
      display flex
      align-items center
      justify-content center
    .s15e
      width 0.36rem
      margin-right 0.1rem
    .cs2
      display none
    .cs3
      display block
    .ba154e5t
      color #9ac613
      font-size 0.6rem
    &.add
      .cs2
        display block
      .cs3
        display none
      .ba154e5t
        color #fc642e
.bmkjsiuie
  display flex
  padding 0.2rem 0.5rem
  border #ddd solid 1px
  background #f7f7f7
  align-items center
  justify-content center
  margin-top 0.4rem
  img
    width 0.51rem 
    height 0.51rem
    margin-right 0.1rem
  .s4e
    flex 1
    color #808080
    font-size 0.34rem
.sdgwetqw4e87
  padding 0.7rem 1rem
  background #fff
  border-bottom #ddd solid 1px
.sd4w6e87
  display flex
  align-items stretch
  justify-content center
  .a154wet8we
    display flex
    flex-direction column
    font-size 0.39rem
    color #808080
    border-left #ddd solid 1px
    flex 1
    align-items center
  .ssss1
    border-left none
  .vla
    color #404040
    font-size 0.66rem
    padding-top 0.2rem
</style>

<template>
  <div class="ye-wrapper">
    <div class="sdgwetqw4e87">
      <div class="sd4w6e87">
        <div class="a154wet8we ssss1">
          <div>钱包余额</div>
          <div class="vla">199.00</div>
        </div>
        <div class="a154wet8we ssss2">
          <div>网费余额</div>
          <div class="vla">199.00</div>
        </div>
      </div>
      <div class="bmkjsiuie">
        <img src="images/gantanhao.png"/>
        <div class="s4e">网费余额不足时，上机将会消耗钱包余额</div>
      </div>
    </div>
    
    <div class="sd154t dtew">
      <ul>
        <li class="as4xcccc" :class="{'add': index%2}" v-for="(item, index) in list" :key="index">
          <div class="cnts">
            <div class="prefx">
              <div class="b1s2e52">在xxxx活动中获得</div>
              <div>2019 / 07 / 11 19:53</div>
            </div>
            <div class="dwdv">
              <img class="s15e cs2" src="images/jia011.png"/>
              <img class="s15e cs3" src="images/jia15w.png"/>
              <span class="ba154e5t">600</span>
            </div>
          </div>
          <TuikuanBtn/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TuikuanBtn from './TuikuanBtn'
export default {
  components: {
    TuikuanBtn
  },
  data () {
    return {
      list: new Array(15).fill('')
    }
  },
  beforeCreate () {
    document.title = '余额明细'
  },
  methods: {

  }
}
</script>