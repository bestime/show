
<style lang="stylus" rel="stylesheet/stylus">
.jifen-wrapper
  min-height 100%
  background #ededed
  box-shadow 0 0 40px rgba(0,0,0,0.5)
  overflow hidden
  .dtew
    .cnts
      line-height 1.7
      padding 0.2rem
      padding-left 0
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
</style>

<template>
  <div class="jifen-wrapper">
    <div class="mmks45tewas dtew">
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      list: new Array(15).fill('')
    }
  },
  beforeCreate () {
    document.title = '积分明细'
  },
  methods: {

  }
}
</script>