<style lang="stylus" rel="stylesheet/stylus">
.input-eg
  .prefix
    font-size:14px
    color:#666
    margin-right:10px
  li
    display flex
    align-items center
    padding:20px 0 20px 100px
    border-bottom:#f2f2f2 solid 1px
.test-box
  width:150px
  height 300px
  overflow: hidden
  background:#dd4215
  transform-origin top
  // 
  // transform scaleY(0.5)
  // transition 0.2s
  // opacity: 0
  // &.show
  //   transform scaleY(1)
  //   opacity: 1
</style>

<template>
  <div class="input-eg">
    <ul>
      <li>
        <div class="prefix">姓名:</div>
        <input-vbt
          v-model="name"
          placeholder="请输入"
        />
      </li>
      <li>
        <div class="prefix">电话:</div>
        <input-vbt
          v-model="phone"
          placeholder="请输11位入数字"
          :checkFunc="checkFunc"
        />
      </li>
      <li>
        <input-vbt
          v-model="searchStr"
          placeholder="搜索内容"
          @on-enter="toSearch"
          style="flex:1"
        >
          <div slot="left" style="align-items:center;justiry-content:center;display:flex;padding:0 8px;">
            <icon-vbt type="search" slot="left" color="#cacaca" :size="14"/>
          </div>
          
        </input-vbt>
      </li>

      <li>
        <input-vbt
          v-model="phone"
          placeholder="请输11位入数字"
          :checkFunc="checkFunc"
          disabled
        >
          <div slot="left" style="align-items:center;justiry-content:center;display:flex;padding:0 8px;"><span>会员卡</span></div>
          <button-vbt slot="right">切换</button-vbt>
        </input-vbt>
      </li>
    </ul>

    <button @click="show=!show">测试</button>

<transition name="top_hide">
    <div class="test-box" v-if="show">电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字</div>
  </transition> 
 
  </div>
</template>

<script>
import { isPhone } from '@npm/bestime'
export default {
  data () {
    return {
      name: '',
      phone: '',
      searchStr: '',
      show: false
    }
  },
  mounted(){    
    
  },

  methods: {
    checkFunc (val, next) {
      const res = String(val).replace(/[^0-9]/g, '').substr(0,11)
      next(isPhone(res) ? false : 'warning', '电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字电话格式不正确，需要11位数字')
      return res
    },

    toSearch (val) {
      alert(val)
    }
  }
}
</script>