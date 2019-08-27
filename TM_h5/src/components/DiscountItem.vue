<style lang="stylus" rel="stylesheet/stylus">
.discount-list-item
  margin 0.4rem
  position relative
  overflow hidden
.ksjiwet
  display flex
  font-size 0.39rem
  position relative
  &:after, &:before
    content ''
    width 0.7rem
    height 0.7rem
    background #ededed
    position absolute
    left 50%
    top 0
    z-index 5
    transform translate(-50%, -50%)
    border-radius 50%
  &:after
    bottom 0
    top auto
    transform translate(-50%, 50%)
  .dpleft, .dpright
    display flex
    position relative
    flex 1
    align-items stretch
    justify-content center
    .main
      flex 1
      background #fff
  .asd5
    font-size 0.84rem
    color #fc642e
    font-weight bold
  .xx
    width 0.13rem
    background url(../assets/images/quanquan01.png)
    background-size 0.13rem
    background-repeat-x no-repeat
  .dpright
    .main
      background #f7f7f7
    .xx
      background url(../assets/images/quanquan01-right.png)
      background-size 0.13rem
      background-repeat-x no-repeat
  .asgewqwe
    display flex
    flex-direction column
    align-items center
    justify-content center
    padding 0.7rem 0
  .g5we48
    padding-bottom 0.3rem
  .bmlsl
    width 0.47rem
    height 0.44rem
    margin-right 0.2rem
  .s145wet4
    width 0.42rem
    height 0.28rem
  .aetwe4564
    display flex
    align-items center
    justify-content center
    flex-direction column
  .riqi
    font-size 0.33rem
    color #808080
  .bwe5t45w
    background #fff
    padding 0.2rem 0.7rem
    margin 0.2rem 0
    font-size 0.3rem
    color #666666
  .gew545sd
    font-size 0.36rem
    color #737373
    margin-right 0.2rem
.djkwgtsdf
  display flex
  align-items stretch
  .absadfwe
    background #e0e0e0
    flex 1
    padding 0.3rem 0.6rem
    padding-bottom 0.4rem
    li
      display flex
      align-items flex-start
      margin-top 0.4rem
  .ete
    width 0.13rem
  .d01
    background url(../assets/images/zk0.png) repeat-y
    background-size 0.13rem
  .d02
    background url(../assets/images/zk02.png) repeat-y
    background-size 0.13rem
  .aset45
    width 0.44rem
    height 0.44rem
    position relative
    margin-right 0.2rem
    flex-shrink 0
    img
      width 100%
      height 100%
      display block
    span
      font-size 0.26rem
      color #666
      position absolute
      left 0
      top 0
      right 0
      bottom 0
      line-height 0.44rem
      text-align center
  .g154et5w
    font-size 0.36rem
    color #666666
    line-height 0.44rem
    .sdtte
      color #262626
      font-weight bold
      
</style>

<template>
  <div class="discount-list-item">
    <div class="ksjiwet">
      <div class="dpleft">
        <div class="xx"></div>
        <div class="main asgewqwe">
          <div class="g5we48">网费抵扣</div>
          <div>
            <img class="bmlsl" src="images/yang.png"/>
            <span class="asd5">10.00</span>
          </div>
        </div>
      </div>
      <div class="dpright">
        <div class="main aetwe4564">
          <div class="riqi">2019.07.23 20:53</div>
          <div class="bwe5t45w">手动使用</div>
          <div @click="open=!open">
            <span class="gew545sd">本券使用规则</span>
            <img class="s145wet4" src="images/jiantou01.png"/>
          </div>
        </div>
        <div class="xx"></div>
      </div>
    </div>
    <div class="djkwgtsdf" v-if="open">
      <div class="ete d01"></div>
      <ul class="absadfwe">
        <li>
          <div class="aset45">
            <img src="images/nbtasdf5.png"/>
            <span>1</span>
          </div>
          <p class="g154et5w">
            <span>本券自领用之日起</span>
            <span class="sdtte">20</span>
            <span>天内有效，过期自动作废</span>
          </p>
        </li>
        <li>
          <div class="aset45">
            <img src="images/nbtasdf5.png"/>
            <span>2</span>
          </div>
          <p class="g154et5w">
            <span>本券可在</span>
            <span class="sdtte">TM旗下连锁</span>
            <span>上机使用</span>
          </p>
        </li>
        <li>
          <div class="aset45">
            <img src="images/nbtasdf5.png"/>
            <span>3</span>
          </div>
          <p class="g154et5w">
            <span>本券将在您</span>
            <span class="sdtte">上机时自动使用</span>
            <span>，</span>
            <span class="sdtte">每日</span>
            <span >仅限使用</span>
            <span class="sdtte">1</span>
            <span>张</span>
          </p>
        </li>
      </ul>
      <div class="ete d02"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  }
}
</script>