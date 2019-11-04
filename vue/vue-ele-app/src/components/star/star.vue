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
        star.push('<img src="./star2.png" />')
      }
      star.push('<img src="./star-h.png" />')
    } else if (this.seller.foodScore === num) {
      for (let i = 0; i < 5 - num; i++) {
        star.push('<img src="./star2.png" />')
      }
    }
    for (let i = 0; i < num; i++) {
      star.push('<img src="./star.png" />')
    }
    console.log(star)
    this.star = star.reverse().join('')
    console.log(this.star)
  }
}
</script>

<style lang="stylus" scoped>
  .star
    text-align center
    margin-top 20px
    img
      width 20px
      height 20px
</style>
