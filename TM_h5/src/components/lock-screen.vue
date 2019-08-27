
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
        <li class="disabled">
          <div class="cnts">
            <div class="prefx">登录网吧</div>
            <div class="dwdv">TNM棒棒糖玩吧</div>
          </div>
        </li>
        <li class="disabled">
          <div class="cnts">
            <div class="prefx">上座机位</div>
            <div class="dwdv">B-224</div>
          </div>
        </li>
        <li>
          <div class="cnts">
            <div class="prefx">挂机留言</div>
            <div class="xjiousliowuet">
              <InputBox v-model="liuyan" placeholder="挂机留言"/>
              <div class="jieg45" @click="showPicker">
                <img class="as15e7" src="images/downjiatou.png"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="cnts">
            <div class="prefx">锁屏密码</div>
            <InputBox v-model="passward" :check="passwardOnInput" type="password" mode="password" placeholder="请输入锁屏密码"/>
          </div>
        </li>
      </ul>
    </div>
    <ButtonBox mode="commit" style="height:1.3rem;margin:0.4rem;">开始锁屏</ButtonBox>
  </div>
</template>

<script>
import ButtonBox from '@base/ButtonBox'
import InputBox from '@base/InputBox'
import SwiperAward from './SwiperAward'
export default {
  components: {
    ButtonBox,
    SwiperAward,
    InputBox
  },
  data () {
    return {
      passward: '',
      liuyan: '',
      op1: [
        { text: '123456789剧毒剧毒剧毒剧毒', value: '剧毒'},
        { text: '蚂蚁', value: '蚂蚁' },
        { text: '幽鬼', value: '幽鬼' }
      ],
      picker: null
    }
  },
  beforeCreate () {
    document.title = '挂机锁屏'
  },
  methods: {
    passwardOnInput (str, next) {
      next(str.substr(0, 18))
    },
    showPicker () {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: '选择留言',
          data: [this.op1],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.liuyan = selectedVal[0]
          }
        })
      }
      this.picker.show()
    }
  }
}
</script>