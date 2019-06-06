<style lang="stylus" rel="stylesheet/stylus">

.pc-scroll-bottom-eg
  width:500px
  height:600px
  background:#ddd
  margin: 20px
  overflow:auto
  li
    background:#dd4215
    color:#fff
    font-size:14px
    margin:10px
    padding:10px

</style>

<template>
  <ul ref="wrapper" class="pc-scroll-bottom-eg">
    <li v-for="(item, index) in list" :key="index">{{ item.content }}</li>
  </ul>
</template>

<script>

function getTestData (type) {
  return new Array(20).fill('').map((item, index) => {
    return {
      type: 'refresh',
      content: `${type}【${index}】`
    }
  })
}
export default {
  data () {
    return {
      list: getTestData('原始数据')
    }
  },
  mounted(){    
    ns.onDomRoll(this.$refs.wrapper, {
      onBottom: next => {        
        ns.loading.show()
        setTimeout(() => {
          this.list = this.list.concat(getTestData('底部数据'))
          ns.loading.close()
          next()
        }, 1000)
      },
      onTop: next => {
        ns.loading.show()
        setTimeout(() => {
          this.list = getTestData('刷新的数据')
          ns.loading.close()
          next()
        }, 1000)
      }
    })
  }
}
</script>