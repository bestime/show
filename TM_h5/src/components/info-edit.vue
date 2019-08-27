<style lang="stylus" rel="stylesheet/stylus">
.edit-info-wrapper
  min-height 100%
  background #ededed
  box-shadow 0 0 40px rgba(0,0,0,0.5)
  overflow hidden
  li
    display flex
    align-items center
    justify-content space-between
    background #fff
    border-bottom #ddd solid 1px
    padding 0 0.4rem
    font-size 0.39rem
    .absfew8
      width 1.8rem
      height 1.8rem
      background #f9f9f9
      overflow hidden
      border-radius 50%
    .cube-upload-btn
      height 100%
    .s15w7te8
      width 100%
      height 100%
  .form-input-wrapper
    flex 1
    margin-left 1rem
    border none
    input
      text-align right
    .img-icon
      display none
</style>

<template>
  <div class="edit-info-wrapper">
    <ul>
      <li>
        <div class="pre">头像</div>
        <div class="absfew8">
          <cube-upload
            action="//jsonplaceholder.typicode.com/photos/"
            v-model="files"
            @files-added="addedHandler"
            @file-error="errHandler"
          >
            <cube-upload-btn :multiple="false">
              <img class="s15w7te8" src="images/touxiang.png"/>
            </cube-upload-btn>
          </cube-upload>
        </div>
        
      </li>
      <li>
        <div class="pre">昵称</div>
        <InputBox v-model="nickname" placeholder="请输入昵称"/>
      </li>
      <li>
        <div class="pre">上网卡号</div>
        <InputBox v-model="idcard" mode="id-card" placeholder="请输入上网卡号"/>
      </li>
      <li>
        <div class="pre">上网密码</div>
        <InputBox v-model="password" mode="password" type="password" placeholder="请输上网密码"/>
      </li>
      <li>
        <div class="pre">手机号</div>
        <InputBox v-model="phone" mode="phone" placeholder="请输入手机号"/>
      </li>
      <li>
        <div class="pre">QQ号</div>
        <InputBox v-model="qq" placeholder="请输入QQ号"/>
      </li>
    </ul>
    <ButtonBox mode="commit" style="height:1.5rem;margin:0.4rem;">保存</ButtonBox>
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
      files: [],
      idcard: '',
      password: '',
      phone: '',
      qq: '',
      nickname: ''
    }
  },
  beforeCreate () {
    document.title = '信息编辑'
  },
  methods: {
    addedHandler() {
      const file = this.files[0]
      file && this.$refs.upload.removeFile(file)
    },
    errHandler(file) {
      // const msg = file.response.message
      this.$createToast({
        type: 'warn',
        txt: 'Upload fail',
        time: 1000
      }).show()
    }
  }
}
</script>