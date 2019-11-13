<template>
  <div>
    <div class="star" v-html="starScore"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      starScore: ''
    }
  },
  props: {
    numScore: {
      type: Number,
      default: function () {
        return 0
      }
    }
  },
  methods: {
    Star () {
      if (this.numScore == 0) return
      let num = Math.floor(this.numScore)
      let star = []
      if (this.numScore > num) {
        for (let i = 0; i < 4 - num; i++) {
          star.push('<img src="../../../static/star2.png" width="30px" height="30px"/>')
        }
       star.push('<img src="../../../static/star-h.png" width="28px" height="28px" style="transform: translateY(-1.8px)" />')
     } else if (this.numScore === num) {
        for (let i = 0; i < 5 - num; i++) {
         star.push('<img src="../../../static/star2.png" width="30px" height="30px"/>')
        }
      }
     for (let i = 0; i < num; i++) {
       star.push('<img src="../../../static/star.png" width="30px" height="30px"/>')
      }
      this.starScore = star.reverse().join('')
    }
  },
  created () {
     this.Star ()
  }
}
</script>

<style lang="stylus" scoped>
  .star
    text-align center
</style>
