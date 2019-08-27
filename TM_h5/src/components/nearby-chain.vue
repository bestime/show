<style lang="stylus" rel="stylesheet/stylus">
.chain-wrapper
  min-height 100%
  background #ededed
  box-shadow 0 0 40px rgba(0,0,0,0.5)
  overflow hidden
  .te5
    height 0.43rem
    margin-right 0.1rem
  .gaswte
    padding 0.4rem
    background #fff
    margin-top 0.4rem
    border #ddd solid 1px
    border-left none
    border-right none
  .assdfew5451a1
    width 100%
    height 4.8rem
    background #f9f9f9
  .basdfwe45
    display flex
    align-items center
    justify-content space-between
    font-size 0.42rem
    color #404040
    margin-top 0.3rem
  .kagae
    color #fc642e
  .bas14w5e4
    display flex
    align-items center
    font-size 0.3rem
    color #999999
    line-height 0.43rem
    padding-top 0.2rem
</style>

<template>
  <div class="chain-wrapper">
    <SearchInput v-model="searchStr" placeholder="请输入网吧名字进行搜索" @on-input="onInput"/>
    <ul> 
      <li class="gaswte" v-for="(item, index) in list" :key="index">
        <img class="assdfew5451a1"/>
        <div>
          <div class="basdfwe45">
            <div>TM棒棒糖网吧</div>
            <div>
              <span class="kagae">4.00</span>
              <span>/小时</span>
            </div>
          </div>
          <div class="bas14w5e4">
            <img class="te5" src="images/dingwei.png"/>
            <span>距我直线3.3公里 | 石桥铺沙河1号街222号</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchInput from '@base/SearchInput'
export default {
  components: {
    SearchInput
  },
  data () {
    return {
      list: new Array(15).fill(''),
      searchStr: ''
    }
  },
  beforeCreate () {
    document.title = '附近连锁店'
  },
  methods: {
    onInput (str, next) {
      next(str)
    }
  }
}
</script>