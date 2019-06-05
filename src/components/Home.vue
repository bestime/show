<style lang="stylus" rel="stylesheet/stylus">
.home-wrapper
  background:#f9f9f9
  overflow hidden
  .home-title
    border-bottom:#eee solid 1px
    font-size:14px
    padding:10px
    color:#999
    margin-bottom:10px
  .home-floor
    padding:20px
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      barcode: '',
      userBarCode: '6935155997315'
    }
  },

  methods: {
    createBarCode () {
      this.barcode = ns.barCode.create()
    },

    checkBarCode () {
      alert(ns.barCode.check(this.userBarCode))
    }
  }
}
</script>
