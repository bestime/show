<style lang="stylus" rel="stylesheet/stylus">
.sol1
  display flex
  align-items center
  padding 20px
  .checkbox-vbt
    margin-right 10px
</style>

<template>
  <div>
    <div class="sol1">
      <checkbox-vbt v-model="ck01">张三</checkbox-vbt>
      <checkbox-vbt v-model="ck02">李四</checkbox-vbt>
      <checkbox-vbt v-model="ck03">王五</checkbox-vbt>
    </div>

    <div class="sol1">
      <checkbox-vbt v-model="ck01" type="circle">张三</checkbox-vbt>
      <checkbox-vbt v-model="ck02" type="circle">李四</checkbox-vbt>
      <checkbox-vbt v-model="ck03" type="circle">王五</checkbox-vbt>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      ck01: true,
      ck02: false,
      ck03: false
    }
  },
  mounted(){    
    
  },

  methods: {
    
  }
}
</script>