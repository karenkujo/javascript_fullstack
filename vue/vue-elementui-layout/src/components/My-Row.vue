<script>
// render jsx
export default {
  props: {
    tag: String
  },
  render (h) {
      const tag = this.tag || 'div'
      // console.log(h)
      // console.log(this.$slots.default)
      // h() createElement
      // 标签名 组件名
      // 标签上的属性
      // 子节点
      return h (tag, {
        class: 'my-el-row'
      }, this.$slots.default)
  }
}
</script>

<style scoped>
.my-el-row {
  width: 100%;
}
</style>