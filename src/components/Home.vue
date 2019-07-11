<style lang="stylus" rel="stylesheet/stylus">
.home-wrapper
  background:#f9f9f9
  overflow hidden
  .home-title
    border-bottom:#eee solid 1px
    font-size:14px
    padding:20px 0 10px 0
    color:#999
    margin-bottom:10px
  .home-floor
    padding:0 20px 20px 20px
    background:#fff
    margin:20px
    border:#ddd dashed 1px    
</style>

<template>
  <div class="home-wrapper">
    <div class="home-floor">
      <div class="home-title">条码生成与校验</div>    
      <div>
        <button-vbt @click="createBarCode">生成条码</button-vbt>
        <input-vbt v-model="barcode" disabled></input-vbt>
      </div>
      <div>
        <input-vbt v-model="userBarCode"></input-vbt>
        <button-vbt @click="checkBarCode">验证有效性</button-vbt>
      </div>
    </div>

    <div class="home-floor">
      <div class="home-title">loading测试</div>
      <div>
        <input-vbt v-model="netNum" :checkFunc="numberCheck"></input-vbt>
        <button-vbt @click="getOriginData">模拟请求</button-vbt>
      </div>
    </div>

    <div class="home-floor">
      <div class="home-title">一次性函数</div>
      <div>
        
        <button-vbt @click="onceTest('一', '次')">测试</button-vbt>
      </div>
    </div>

    <div class="home-floor">
      <div class="home-title">节流和防抖</div>
      <div>
        
      </div>
      <ul>
        <li>
          <div>节流 throttle</div>
          <b>{{ throttle_num }}</b>
          <button-vbt @click="jieliu('节', '流')">点击测试</button-vbt>
        </li>
        <li>
          <div>防抖 debounce</div>
          <b>{{ de_num }}</b>
          <button-vbt @click="fangdou('防', '抖')">点击测试</button-vbt>
        </li>
      </ul>
    </div>

    <div class="home-floor">
      <div class="home-title">确认函数用户防止重复操作，比如请求接口</div>
      <div>
        
        <button-vbt @click="confirmFunTest()">测试</button-vbt>
      </div>
    </div>

  </div>
</template>

<script>
import { barCode, sleep, dialog, loading, throttle, debounce, FunctionOnce, FunctionConfirm } from '@bestime/js'




export default {
  components: {
    
  },
  data () {
    return {
      barcode: '',
      userBarCode: '6935155997315',
      netNum: '10',
      throttle_num: 0,
      de_num: 0,
      once_msg: '这是一次性函数，将不再执行',
      hhMsg: '调用到了vue的this'
    }
  },

  mounted () {
    
  },

  methods: {
    onceTest: FunctionOnce(function (a, b) {
      dialog({ msg: `${this.once_msg}【${a}】【${b}】` })
    }),

    fangdou: debounce(function (a, b) {
      console.log(a, b)
      this.de_num++
    }, 1000),

    jieliu: throttle(function (a, b) {
      console.log(a, b)
      this.throttle_num++
    }, 1000),

    createBarCode () {
      this.barcode = barCode.create()
    },

    confirmFunTest: FunctionConfirm({
      handle: function(next){
        dialog({msg: '开始，完成之前不允许重复执行'})
        setTimeout(() => {
          dialog({msg: '执行完毕，可再次执行'})
          next()
        }, 5000)
      },
      fast: function () {
        dialog({msg: '操作过快，请稍后再试'})
      }
    }),

    checkBarCode () {
      dialog({
        msg: `条码：${this.userBarCode} ${barCode.check(this.userBarCode) ? '有效' : '无效'}`
      })
    },

    numberCheck (val, next) {
      return val.replace(/[^0-9]/g, '')
    },

    async getOriginData () {
      for(let a=0; a<this.netNum; a++) {
        loading.show(`第${a+1}次请求`)
        await sleep(500)
        loading.close()
      }
      dialog({msg: '请求完毕', autoClose: 2000})
    }
  }
}
</script>
