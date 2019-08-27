
<style lang="stylus" rel="stylesheet/stylus">
.bind-user-wrapper
  min-height 100%
  background #ededed
  box-shadow 0 0 40px rgba(0,0,0,0.5)
  .a12s48e7t8
    max-width 100%
  .bun-num
    height 0.47rem
    margin-top 0.12rem
  .bu-wrapper
    display flex
    margin 0 0.5rem
    justify-content flex-start
    padding 0.1rem 0
  .bu-content
    flex 1
    font-size 0.36rem
    color #4c4c4c
    line-height 1.7
    margin-left 0.2rem
  .ass4747
    margin 0 0.4rem
  .form-input-wrapper
    margin 0.2rem 0
  .s1548we
    display flex
    align-items stretch
</style>

<template>
  <div class="bind-user-wrapper">
    <img class="a12s48e7t8" src="images/gbm65.jpg"/>
    <div class="bu-wrapper">
      <img class="bun-num" src="images/b1.png"/>
      <div class="bu-content">请您输入正确的上网卡号，绑定后将无法修改</div>
    </div>
    <div class="bu-wrapper">
      <img class="bun-num" src="images/b2.png"/>
      <div class="bu-content">绑定即创建TM连锁账户，通用于TM连锁旗下所有网吧</div>
    </div>
    <div class="bu-wrapper">
      <img class="bun-num" src="images/b3.png"/>
      <div class="bu-content">老会员余额将会合并到该账户中，仅限该网吧使用</div>
    </div>
    <div class="bu-wrapper">
      <img class="bun-num" src="images/b4.png"/>
      <div class="bu-content">新充值的余额通用于TM连锁旗下所有网吧，可用于网费消耗和购买商品</div>
    </div>
    <div class="ass4747">
      <InputBox
        mode="id-card"
        placeholder="请输入上网卡号"
        v-model="myidcard"
        @on-blur="idcaradBlur"
      />
      <InputBox
        mode="password"
        placeholder="请输入上网卡密码，默认为上网卡号后6位"
        v-model="mypassword"
      />
      <InputBox
        mode="phone"
        placeholder="手机号"
        v-model="myPhone"
      />
      <div class="s1548we">
        <InputBox
          style="margin: 0;flex:1;"
          mode="message-code"
          placeholder="短信验证码"
          v-model="msgCode"
          :check="checkMsgCode"
        />
        <ButtonBox mode="message-code" @click="getYzm" style="margin-left:0.2rem">获取</ButtonBox>
      </div>
      <ButtonBox mode="commit" @click="doCommit" style="height:1.4rem;margin-top:0.2rem">确定</ButtonBox>
    </div>
    <div style="height: 0.5rem;"></div>
  </div>
</template>

<script>
import InputBox from '@base/InputBox'
import ButtonBox from '@base/ButtonBox'
export default {
  components: {
    InputBox,
    ButtonBox
  },
  data () {
    return {
      myidcard: '',
      mypassword: '',
      myPhone: '',
      msgCode: ''
    }
  },
  beforeCreate () {
    document.title = '网吧账户绑定'
  },
  methods: {
    doCommit () {
      if(!this.myidcard) return ns.dialog({ msg: '请输入身份证号' })
      if(!this.myPhone) return ns.dialog({ msg: '请输入手机号码' })
      if(!this.msgCode) return ns.dialog({ msg: '请输入短信验证码' })
    },
    idcaradBlur () {
      if(this.myidcard.length===18) {
        this.mypassword = this.myidcard.substr(-6)
      }
    },
    checkMsgCode (str, next) {
      str = str.replace(/[^0-9]/g, '').substr(0,6)
      next(str)
    },
    getYzm (next) {
      next()
    }
  }
}
</script>