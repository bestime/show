
<style lang="stylus" rel="stylesheet/stylus">
.xia-ji-wrapper
  min-height 100%
  background #ededed
  box-shadow 0 0 40px rgba(0,0,0,0.5)
  overflow hidden
</style>

<template>
  <div class="xia-ji-wrapper">
    <div class="mmks45tewas">
      <ul>
        <li>
          <div class="cnts">
            <div class="prefx">登录网吧</div>
            <div class="dwdv">TNM棒棒糖玩吧</div>
          </div>
        </li>
        <li>
          <div class="cnts">
            <div class="prefx">上座机位</div>
            <div class="dwdv">B-224</div>
          </div>
        </li>
        <li>
          <div class="cnts">
            <div class="prefx">上座时长</div>
            <div class="dwdv">02：10：110</div>
          </div>
        </li>
      </ul>
    </div>
    <ButtonBox mode="commit" style="height:1.3rem;margin:0.4rem;">远程下机</ButtonBox>
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
      
    }
  },
  beforeCreate () {
    document.title = '下机'
  },
  methods: {
    
  }
}
</script>