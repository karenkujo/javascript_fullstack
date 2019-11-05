<template>
  <div class="star" v-html="star"></div>
</template>

<script>
export default {
  data () {
    return {
      star: ''
    }
  },
  props: {
    seller: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  created () {
    let num = Math.floor(this.seller.foodScore)
    let star = []
    if (this.seller.foodScore > num) {
      for (let i = 0; i < 4 - num; i++) {
        star.push('<img src="../../../static/star2.png" />')
      }
      star.push('<img src="../../../static/star-h.png" />')
    } else if (this.seller.foodScore === num) {
      for (let i = 0; i < 5 - num; i++) {
        star.push('<img src="../../../static/star2.png" />')
      }
    }
    for (let i = 0; i < num; i++) {
      star.push('<img src="../../../static/star.png" />')
    }
    this.star = star.reverse().join('')
  }
}
</script>

<style lang="stylus" scoped>
  .star
    text-align center
    margin-top 20px
    img
      display inline-block
      width 10px
      height 10px
      margin-left 5px
</style>
