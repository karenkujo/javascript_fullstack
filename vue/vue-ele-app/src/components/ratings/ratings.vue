<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">4.2</h1>
          <p>综合评分</p>
          <div class="rank">高于周边商家69.2%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <div class="star"></div>
            <span class="score">4.1</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <div class="star"></div>
            <span class="score">4.3</span>
          </div>
          <div class="songdatime">
            <span class="title">送达时间</span>
            <span class="time">38分钟</span>
          </div>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star'
export default {
  porps: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    'v-star': star
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin'
  .ratings
    width 100%
    overflow hidden
    .ratings-content
      width 100%
      .overview
        display flex
        padding 18px 0
        .overview-left
          width 100px
          border-right 1px solid rgba(7, 17, 27, .1)
          padding 10px 20px
          text-align center
          h1
            color #f90
            font-size 24px
            line-height 24px
            font-weight 500
          p
            font-size 12px
            padding 8px 0
          .rank
            font-size 10px
            color #93999f
        .overview-right
          margin-left 26px
          font-size 12px
          .score-wrapper
            padding 8px 0
            .title
              color #07111b
            .star
              display inline-block
              margin 0 10px
            .score
              color #f90
          .songdatime
            padding 8px 0
            .time
              color #93999f
      .line
        background-color #f3f5f7
        height 15px
        width 100%
        border-bottom 1px solid rgba(7, 17, 27, .1)
        border-top 1px solid rgba(7, 17, 27, .1)
</style>
