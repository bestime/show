<style lang="stylus" rel="stylesheet/stylus">
.x1vwe8465wsd
  padding 20px
  ul
    border #eee solid 1px
  li
    padding 10px
    border-bottom #eee solid 1px
</style>

<template>
  <div class="x1vwe8465wsd">
    <ul>
      <li><button @click="bushChage">批量切换</button></li>
      <li v-for="(item, index) in list" :key="index">
        <switch-vbt
          :id="item.key"
          ref="swi"
          v-model="item.checked"
          @on-change="changeing"
          :size="item.size"
        >
          {{item.label}} ({{item.size}}px)
        </switch-vbt>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      list: [
        { key: 'two', checked: true, label: '李四', size: '12' },
        { key: 'four', checked: false, label: '赵六', size: '26' },
        { key: 'three', checked: false, label: '王五', size: '28' },
        { key: 'ass', checked: true, label: '李青', size: '30' },
        { key: 'fas', checked: true, label: '提莫', size: '34' },
        { key: 'bw1e2', checked: false, label: '加里奥', size: '40' },
      ]
    }
  },
  
  mounted(){    
    
  },

  methods: {
    bushChage () {
      this.list.forEach(item => {
        const oCp = this.$refs.swi.find(c => c.id === item.key)
        if(oCp && !oCp.isLoading()) {
          item.checked = !item.checked
        }
      })
    },
    changeing (val, next) {
			setTimeout(() => {
        next()
			}, 1000)
		},
  }
}
</script>