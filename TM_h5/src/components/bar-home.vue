
<style lang="stylus" rel="stylesheet/stylus">
.bar-home-wrapper
  min-height 100%
  background #ededed
  box-shadow 0 0 40px rgba(0,0,0,0.5)
.as154te5
  width 4.27rem
.tewt4545we
  background-image linear-gradient(45deg,#0b1821,#0b1922,#18425a)
  display flex
  align-items center
  justify-content center
  padding 1.5rem 0
  flex-direction column
.akwe45
  font-size 0.39rem
  color #fff
  background rgba(255,255,255,0.1)
  padding 0.2rem 0.4rem
  border-radius 0.5rem
  display flex
  align-items center
  justify-content center
  margin-top 0.3rem
  border rgba(255,255,255,0.2) solid 1px
  img
    margin-right 0.2rem
.bdw1545545
  display flex
  align-items center
  justify-content center
  font-size 0.39rem
  margin-left 2.6rem
  margin-top 0.4rem
  overflow hidden
.niwe54545
  position relative
  display flex
  align-items center
  background white
  padding-bottom 0.6rem
  padding-left 0.6rem
.as4878ewq7t8we
  position absolute
  top -1.3rem
.as15b7wet8454s5d
  display flex
  align-items stretch
  justify-content center
  font-size 0.39rem
  padding 0 0.6rem 0.6rem 0.4rem
  background #fff
.s45tzxdtw
  flex 1
  display flex
  flex-direction column
  align-items center
  justify-content center
.g5w4etq4e
  color #8c8c8c
  padding 0.1rem 0
  align-self stretch
  text-align center
  border-left #eee solid 1px
.g45w45basfe
  color #4c4c4c
  margin-top 0.2rem
.gew454g5we
  display flex
  align-items center
  justify-content center
  background white
  padding 0.7rem 0
  border-top #f9f9f9 solid 1px
.nase545
  width 1.8rem
  margin 0 0.7rem
  img
    width 100%
    height 100%
    display block
  .alse454
    text-align center
    font-size 0.39rem
    margin-top 0.4rem
</style>

<template>
  <div class="bar-home-wrapper">
    <div class="tewt4545we">
      <img class="as154te5" src="images/tmwb.png"/>
      <div class="akwe45">
        <img style="width:0.54rem" src="images/housesmall.png"/>
        <span>查看附近连锁门店</span>
      </div>
    </div>
    <div class="niwe54545">
      <TX class="as4878ewq7t8we"/>
      <div class="bdw1545545">
        <span>用户名</span>
        <ButtonImg style="margin-top:0.1rem;margin-left:0.2rem;" width="0.6rem" height="0.6rem" srcStatic="images/edit.png" srcActive="images/edit-active.png"/>
      </div>
    </div>
    <div class="as15b7wet8454s5d">
      <div class="s45tzxdtw">
        <div class="g5w4etq4e" style="border:none">积分</div>
        <div class="g45w45basfe">555</div>
      </div>
      <div class="s45tzxdtw">
        <div class="g5w4etq4e">余额</div>
        <div class="g45w45basfe">155.00</div>
      </div>
      <div class="s45tzxdtw">
        <div class="g5w4etq4e">优惠券</div>
        <div class="g45w45basfe">555</div>
      </div>
      <div class="s45tzxdtw">
        <div class="g5w4etq4e">礼品</div>
        <div class="g45w45basfe">555</div>
      </div>
    </div>
    <div class="gew454g5we">
      <div class="nase545">
        <img class="nnn5s45e" src="images/guaji.png"/>
        <div class="alse454">挂机</div>
      </div>
      <div class="nase545">
        <img class="nnn5s45e" src="images/chongzhi.png"/>
        <div class="alse454">充值</div>
      </div>
      <div class="nase545">
        <img class="nnn5s45e" src="images/xiaji.png"/>
        <div class="alse454">下机</div>
      </div>
    </div>
  </div>
</template>

<script>
import TX from '@base/TX.vue'
import ButtonImg from '@base/ButtonImg.vue'
export default {
  components: {
    TX,
    ButtonImg
  },
  data () {
    return {
     
    }
  },
  beforeCreate () {
    document.title = '首页'
  },
  methods: {
    
  }
}
</script>