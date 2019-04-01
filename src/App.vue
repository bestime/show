<style lang="stylus" rel="stylesheet/stylus">
h1
  display:block
</style>

<template>
  <div class="main-box" id="app">    
    <!--
    <switch-vbt v-model="isOpen" @on-change="change">测试{{ isOpen }}</switch-vbt>
    -->
    <SwiperWrapperVbt style="width:300px;height:500px;border:#000 solid 1px;">
      <SwiperItemVbt>1</SwiperItemVbt>
      <SwiperItemVbt>2</SwiperItemVbt>
      <SwiperItemVbt ref="page3" @on-enter="page3Enter" @before-enter="page3=[]">
        <h1 v-for="(item, index) in page3" :key="index">{{ index }}</h1>
      </SwiperItemVbt>
      <SwiperItemVbt>4</SwiperItemVbt>
      <SwiperItemVbt>5</SwiperItemVbt>
      <SwiperItemVbt>6</SwiperItemVbt>
      <SwiperItemVbt>7</SwiperItemVbt>
    </SwiperWrapperVbt>
    
  </div>
</template>

<script>
function sleep (stamp) {
  return new Promise(resolve => setTimeout(resolve, stamp))
}

export default {
  name: 'app',
  data () {
    return {
      isOpen: false,
      page3: new Array(15).fill('')
    }
  },
  methods: {
    change (toVal) {
      this.isOpen = toVal
    },

    page3Enter () {
      this.$nextTick(async () => {
        for(let a=0; a<15; a++) {
          await sleep(50)
          this.page3.push(a)
        }
        this.$refs.page3.update()
      })
    }
  },
}
</script>
  