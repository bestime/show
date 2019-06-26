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
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data () {
    return {
      barcode: '',
      userBarCode: '6935155997315',
      netNum: '10'
    }
  },

  mounted () {
    
  },

  methods: {
    createBarCode () {
      this.barcode = ns.barCode.create()
    },

    checkBarCode () {
      ns.dialog({
        msg: `条码：${this.userBarCode} ${ns.barCode.check(this.userBarCode) ? '有效' : '无效'}`
      })
    },

    numberCheck (val, next) {
      return val.replace(/[^0-9]/g, '')
    },

    async getOriginData () {
      for(let a=0; a<this.netNum; a++) {
        ns.loading.show(`第${a+1}次请求`)
        await ns.sleep(500)
        ns.loading.close()
      }
      ns.dialog({msg: '请求完毕', autoClose: 2000})
    }
  }
}
</script>
