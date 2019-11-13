<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <p>综合评分</p>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <div class="star">
              <v-star :numScore="seller.serviceScore" v-if="seller.serviceScore"></v-star>
            </div>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <div class="star">
              <v-star :numScore="seller.foodScore" v-if="seller.foodScore"></v-star>
            </div>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="songdatime">
            <span class="title">送达时间</span>
            <span class="time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="rating-select">
        <div class="rating-type">
          <span class="button positive" :class="{active: currentButton === 0}" @click="active(0)">全部
            <span class="count">{{rating.length}}</span>
          </span>
          <span class="button positive" :class="{active: currentButton === 1}" @click="active(1)">满意
            <span class="count">18</span>
          </span>
          <span class="button negative" :class="{active: currentButton === 2}" @click="active(2)">不满意
            <span class="count">6</span>
          </span>
        </div>
        <div class="swich" :class="{on: ison}" @click="isOn">
          <span class="icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(item, index) in rating" :key="index">
            <div class="avatar">
              <img :src="item.avatar" alt="">
            </div>
            <div class="content">
              <div class="name">{{item.username}}</div>
              <div class="star-wrapper">
                <span class="star">
                  <v-star :numScore="item.score" v-if="seller.serviceScore"></v-star>
                </span>
                <span class="deliveryTime">{{item.deliveryTime}}</span>
              </div>
              <p class="desc">{{item.text}}</p>
              <div class="recommend">
                <span class="icon-thumb_up" v-show="item.recommend.length"></span>
                <span class="item" v-for="(food, index) in item.recommend" :key="index">{{food}}</span>
              </div>
              <div class="time">2016-07-23 21:52</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star'
export default {
  data () {
    return {
      rating: '',
      currentButton: 0,
      ison: true
    }
  },
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    'v-star': star
  },
  created () {
    this.$http.get('http://localhost:8080/static/ratings.json')
    .then((res) => {
      this.rating = res.data.data
      console.log(this.rating)
    })
  },
  methods: {
    active (num) {
      this.currentButton = num
    },
    isOn () {
      this.ison = !this.ison
    }
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
            position relative
            .title
              color #07111b
              position absolute
              top 10px
            .star
              display inline-block
              margin 0 10px
              transform scale(.6) translate(40px)
              vertical-align middle
            .score
              color #f90
              vertical-align middle
          .songdatime
            padding 8px 0
            .time
              color #93999f
              margin-left 14px
      .line
        background-color #f3f5f7
        height 15px
        width 100%
        border-bottom 1px solid rgba(7, 17, 27, .1)
        border-top 1px solid rgba(7, 17, 27, .1)
      .rating-select
        width 100%
        .rating-type
          position relative
          margin 0 20px
          padding 17px 0
          border-1px(rgba(7, 17, 27, .1))
          .button
            display inline-block
            margin-right 6px
            padding 8px 0
            text-align center
            width 60px
            font-size 12px
            color #4d555f
            &.positive
              background rgba(0,160,220,.2)
            &.negative
              background rgba(77,85,93,.2)
            .count
              font-size 10px
            &.active
              background-color rgb(0, 160, 220)
        .swich
          width 100%
          padding 12px 18px
          color #93999f
          border-1px(rgba(7, 17, 27, .1))
          .icon-check_circle
            font-size 25px
            vertical-align middle
            margin-right 6px
          .text
            font-size 13px
            vertical-align middle
          &.on
            .icon-check_circle
              color rgb(0, 220, 160)
      .rating-wrapper
        width 100%
        padding 0 18px
        box-sizing border-box
        .rating-item
          padding 17px 0
          width 100%
          display flex
          border-1px(rgba(7, 17, 27, .1))
          .avatar
            margin-right 10px
            img
              width 30px
              height 30px
              border-radius 50%
          .content
            position relative
            width 100%
            .name
              font-size 10px
              color #07111b
            .star-wrapper
              padding 8px 0
              .star
                display inline-block
                transform scale(0.5)
                vertical-align middle
                position relative
                right 37px
              .deliveryTime
                font-size 10px
                color #93999f
                vertical-align middle
                position relative
                right 73px
            .desc
              font-size 12px
              color #07111b
              margin-bottom 10px
            .recommend
              font-size 0
              .icon-thumb_up
                font-size 10px
                color rgb(0, 160, 220)
              .item
                display inline-block
                font-size 10px
                padding 2px 5px
                border 1px solid #93999f
                color #93999f
                margin-left 6px
                margin-bottom 4px
            .time
              position absolute
              top 0
              right 0
              font-size 10px
              color #93999f
</style>
