<style lang="stylus" rel="stylesheet/stylus">
.radio-group-01
  margin: 20px
  padding: 10px
  border:#d9d9d9 solid 1px
  .prefix
    font-size 12px
    color:#666
    margin-bottom:10px

</style>

<template>
  <div>

    <div class="radio-group-01">
      <radio-item-vbt v-model="test01">双向绑定</radio-item-vbt><br/>
      <radio-item-vbt v-model="test01" type="square">双向绑定</radio-item-vbt>

    </div>
    <div class="radio-group-01">
      <radio-item-vbt :value="test02" @on-change="t2Change">加载过度</radio-item-vbt><br/>
      <radio-item-vbt :value="test02" @on-change="t2Change" type="square">加载过度</radio-item-vbt>
    </div>

    <div class="radio-group-01">
      <div class="prefix">
        <span>选中的值 </span>
        <b style="color:red;">{{ g_model_01 }}</b>
        <button @click="g_model_01='3'" style="margin-left:10px;">选王五</button>
      </div>
      <radio-group-vbt v-model="g_model_01">
        <radio-item-vbt groupkey="a">这个不是循环</radio-item-vbt>
        <radio-item-vbt :groupkey="item.key" v-for="(item, index) in list01" :key="index">
          {{ item.label }}
        </radio-item-vbt>
      </radio-group-vbt>
    </div>
    
  </div>
</template>

<script>

export default {
  data () {
    return {
      test01: false,
      test02: false,
      g_model_01: '1',
      list01: [
        { key: '1', label: '张三', checked: false },
        { key: '2', label: '李四', checked: false },
        { key: '3', label: '王五', checked: false },
        { key: '4', label: '赵六', checked: false },
      ]
    }
  },

  mounted(){    
    
  },  

  methods: {
    t2Change (toVal) {
      setTimeout(() => {
        this.test02 = toVal
      }, 1000)
    }
  }
}
</script>