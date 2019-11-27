<style lang="stylus" rel="stylesheet/stylus">
.img-eg
  width:100px
  height:100px
.img-eg-wrapper
  li
    display:flex
    align-items:center
    justify-content: center
    padding: 20px 0
    border-bottom:#f2f2f2 dashed 1px
.s1fw51sfw5e
  transition 0.2s
</style>

<template>
  <div class="img-eg-wrapper">
    <div>
      <button class="s1fw51sfw5e" @click="changepic">改变图片</button>
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <image-vbt class="img-eg" :src="item.pic"/>
      </li>
    </ul>
  </div>
</template>

<script>
const onlinePic = 'https://gl-lh.wwwscn.com/Upload/goods/20171031/75c01f9c43c9f448008d3a917da44d30.jpg'
export default {
  data () {
    return {
      list: new Array(100).fill('').map(item => {
        return {
          pic: `${BASE_URL}images/d1.jpg`
        }
      })
    }
  },
  methods: {
    changeing (val, next) {
			setTimeout(() => {
				this.open = val
			}, 2000)
    },
    
    changepic () {
      const list = this.list
      list.forEach((item, index) => item.pic = `${onlinePic}?${index}`)
      this.list = list
    }
  }
}
</script>