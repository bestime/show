<style lang="stylus" rel="stylesheet/stylus">
.editor-vbt
  width 100%
  height 100%
  outline none
  position relative
  .editor
    width 100%
    height 100%
    overflow auto
    word-break break-all
    overflow-wrap break-word
    overflow-x hidden
    border 1px solid #ccc
    box-sizing border-box
    padding 5px
  .bq-wrapper
    position absolute
    bottom 100%
    left 0
    padding 10px
    margin 0 auto 3px 0
    background #fff
    box-sizing border-box
    box-shadow 0 0 10px rgba(0,0,0,0.1)
    border #eee solid 1px
    
    ul
      border #eee solid 1px
      border-right none
      border-bottom none
    li
      display inline-flex
      width 36px
      height 36px
      align-items center
      justify-content center
      vertical-align middle
      border-right #eee solid 1px
      border-bottom #eee solid 1px
</style>

<template>
  <div class="editor-vbt"> 
    <div v-if="showBiaoQing" class="bq-wrapper">
      <ul>
        <li v-for="(num, index) in 109" :key="index" @click="insertImg(num)">
          <img :src="`${imgUrlPre}/${num}.gif`"/>
        </li>
      </ul>
    </div>
    <div 
      ref="editor"
      class="editor"
      contenteditable="true"
      @keyup="saveCursor"
      @click="saveCursor"
    />
    
  </div>  
</template>

<script>
export default {
  name: 'editor-vbt',
  props: {

  },

  data () {
    return {
      imgUrlPre: 'http://192.168.0.224:9999/web/bestime/public/images/arclist',
      range: null,
      showBiaoQing: false
    }
  },

  mounted() {
    
  },
  
  methods: {    
    saveCursor () {
      this.range = getNowRange(this.$refs.editor)
    },
    insertImg (num) {
      if(!this.$refs.editor) return;
      setRange(this.$refs.editor, this.range);
      const url = `${this.imgUrlPre}/${num}.gif`
      document.execCommand('insertHTML', false, `<img class="editor-biaoqing" data-num="${num}" src="${url}" />`)
      this.saveCursor()
    }
  },
}

// 获取当前光标对象
function getNowRange (dom) {
  let caretOffset = 0
  const doc = dom.ownerDocument || dom.document
  const win = doc.defaultView || doc.parentWindow
  const sel = win.getSelection()
  const range = win.getSelection().getRangeAt(0)
  const preCaretRange = range.cloneRange()
  preCaretRange.selectNodeContents(dom)
  preCaretRange.setEnd(range.endContainer, range.endOffset)
  caretOffset = preCaretRange.toString().length
  return range
}

// 设置光标
function setRange (dom, range) {    
  dom.focus()
  if(range) {
    let selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
  }
}
</script>








