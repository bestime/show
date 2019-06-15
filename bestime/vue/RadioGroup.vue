<style lang="stylus" rel="stylesheet/stylus">
.radio-group-vbt
  display block
  margin 0
  padding 0
  .radio-item-vbt
    margin-right 10px
</style>

<template>
  <div class="radio-group-vbt">
    <slot></slot>
  </div>  
</template>

<script>
import { findComponentsDownward } from './vue-tool.js'
export default {
  name: 'radio-group-vbt',
  props: {
    value: {
      default: false
    },
    index: {
      type: Number,
      default: 0
    }
  },
  
  data () {
    return {
      childVal: null
    }
  },
  mounted () {
    this.updateValue()
  },
  computed: {
    checked () {
      return Number(this.value)
    }
  },


  methods: {
    updateValue (toVal) {
      this.childrens = findComponentsDownward(this, 'radio-item-vbt');
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.groupVal = typeof toVal==='undefined' ? this.value : toVal
          child.groupMode = true
        });
      }
    },

    updateChild (toVal) {
      this.childVal = toVal
      this.$emit('input', toVal)
      this.updateValue(toVal)
    }
  },

  watch: {
    value (newVal) {
      if(newVal!==this.childVal) {
        this.updateValue()
      }
    }
  }
}
</script>