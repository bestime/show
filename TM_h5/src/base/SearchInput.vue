<style lang="stylus" rel="stylesheet/stylus">
.search-input-wrapper
  display flex
  align-items center
  justify-content center
  background #fff
  height 1.3rem
  padding 0 0.4rem
  border-bottom #ddd solid 1px
  position relative
  input
    font-size 0.39rem
    width 100%
    background none
    outline none
    text-align center
  .zanwei
    display flex
    align-items center
    justify-content center
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    img
      width 0.6rem
      height 0.66rem
    span
      font-size 0.44rem
      color #999999
      margin-left 0.2rem
</style>

<template>
  <div
    class="search-input-wrapper"
  >
    <input
      ref="input"
      @blur="onBlur"
      @input="onInput"
      :value="value"
    />
    <div v-if="!isFocus && emytyValue" class="zanwei" @click="toEdit">
      <img src="images/sousuo.png"/>
      <span>{{placeholder}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: String
  },
  data () {
    return {
      isFocus: false
    }
  },
  computed: {
    emytyValue () {
      return this.value === '' || typeof this.value === 'undefined'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.input = this.$refs.input
    })
  },

  methods: {
    toEdit () {
      this.isFocus = true
      this.input.focus()
    },
    onBlur () {
      this.isFocus = false
    },
    onInput () {
      this.$emit('on-input', this.input.value, toVal => {
        this.$emit('input', toVal)
        this.input.value = toVal
      })
    }
  }
}
</script>