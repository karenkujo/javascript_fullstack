<template>
  <div class="seller" ref="seller">
    <div class="seller-content">
      <div class="overview">
        <div class="title">{{seller.name}}</div>
        <div class="score-content border-1px">
          <span class="star">
            <v-star :numScore="seller.score" v-if="seller.score"></v-star>
          </span>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="desc">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span>{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span>{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span>{{seller.deliveryTime}}</span>元
            </div>
          </li>
        </ul>
        <div class="favorite" :class="{active: isActive}" @click="favorite">
          <div class="icon-favorite"></div>
          <span>{{shoucang}}</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="bulletin">
        <h2 class="title">公告与活动</h2>
        <div class="content border-1px">
          <p>{{seller.bulletin}}</p>
        </div>
      </div>
      <ul class="supports">
        <li class="support-item border-1px" v-for="(item, index) in seller.supports" :key="index">
          <span class="icon" :class="classMap[item.type]"></span>
          <span class="text">{{item.description}}</span>
        </li>
      </ul>
      <div class="line"></div>
      <div class="pics">
        <div class="title">商家实景</div>
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list">
            <li class="pic-item" v-for="(item, index) in seller.pics" :key="index">
              <img :src="item" alt="" width="120" height="90">
            </li>
          </ul>
        </div>
      </div>
      <div class="line"></div>
      <div class="info">
        <div class="title">商家信息</div>
        <ul class="info-wrapper">
          <li class="info-item" v-for="(item, index) in seller.infos" :key="index">
            <div class="text">{{item}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import star from "@/components/star/star"
export default {
  data () {
    return {
     isActive: true,
     shoucang: '已收藏',
     classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  },
  components: {
    'v-star': star,
  },
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.picWrapperScroll = new BScroll(this.$refs.picWrapper, {
        click: true,
        scrollX: true
      })
      this.sellerScroll = new BScroll(this.$refs.seller, {
        click: true
      })
    })
  },
  methods: {
    favorite () {
      this.isActive = !this.isActive
      let text = ['已收藏', '收藏']
      if (this.isActive) {
        this.shoucang = text[0]
      } else {
        this.shoucang = text[1]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin'
  .seller
    width 100%
    position absolute
    width: 100%
    overflow: hidden
    position: absolute
    top: 174px
    bottom: 0
    .seller-content
      width 100%
      .overview
        box-sizing border-box
        padding 18px
        width 100%
        border-bottom 1px solid rgba(7, 17, 27, .2)
        .title
          font-size 14px
          line-height 14px
          color #07111b
          margin-bottom 10px
        .score-content
          font-size 10px
          color #4d555d
          padding-bottom 20px
          border-1px(rgba(7, 17, 27, .1))
          .star
            zoom: .6
            display inline-block
          span
            line-height 10px
            vertical-align middle
            margin-left 8px
        .desc
          display flex
          padding-top 16px
          .block
            flex 1
            text-align center
            border-right 1px solid rgba(7, 17, 27, .1)
            padding 8px 0
            h2
              font-size 10px
              color #93999f
              margin-bottom 4px
            .content
              font-size 12px
              span
                font-size 24px
          .block:nth-child(3n+3)
            border none
        .favorite
          display inline-block
          width 30px
          position absolute
          top 18px
          right 18px
          font-size 10px
          color #d4d6d9
          text-align center
          &.active
            .icon-favorite
              color #f01414
          .icon-favorite
            font-size 24px
            margin-bottom 4px
          span 
            color #4d555d
      .line
        background-color: #f3f5f7
        height: 15px
        width: 100%
        border-bottom 1px solid rgba(7, 17, 27, 0.1)
      .bulletin
        padding 18px 18px 0 18px
        box-sizing border-box
        .title
          font-size 14px
          color #07111b
          line-height 14px
          margin-bottom 6px
          font-weight 530
        .content
          font-size 12px
          color #f01414
          line-height 24px
          box-sizing border-box
          padding 0 0 12px 16px
          border-1px(rgba(7, 17, 27, 0.1))
      .supports
        box-sizing border-box
        padding 0 18px
        .support-item
          box-sizing border-box
          padding 15px 12px
          border-bottom 1px solid rgba(7, 17, 27, 0.1)
        .support-item:nth-child(5n+5)
          border none
        .icon
          display inline-block
          width 16px
          height 16px
          vertical-align middle
          margin-right 6px
          background-size 16px 16px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_2')
          &.discount
            bg-image('discount_2')
          &.guarantee
            bg-image('guarantee_2')
          &.invoice
            bg-image('invoice_2')
          &.special
            bg-image('special_2')
        .text
          color #07111b
          font-size 12px
      .line
        background-color: #f3f5f7
        height: 15px
        width: 100%
        border-bottom 1px solid rgba(7, 17, 27, 0.1)
        border-top 1px solid rgba(7, 17, 27, 0.1)
      .pics
        padding 18px
        box-sizing border-box
        .title
          font-size 15px
          line-height 15px
          margin-bottom 10px
        .pic-wrapper
          width 100%
          white-space nowrap
          overflow hidden
          .pic-list
            display block
            width 498px
            .pic-item
              width 120px
              height 90px
              display inline-block
              margin-right 6px
              img
                width 100%
      .line
        background-color: #f3f5f7
        height: 15px
        width: 100%
        border-bottom 1px solid rgba(7, 17, 27, 0.1)
        border-top 1px solid rgba(7, 17, 27, 0.1)
      .info
        padding 18px 18px 0
        .title
          font-size 15px
          padding-bottom 16px
          border-bottom 1px solid rgba(7, 17, 27, .1)
        .info-wrapper
          .info-item
            font-size 12px
            padding 16px 6px
            line-height 18px
            border-bottom 1px solid rgba(7, 17, 27, .1)
          .info-item:nth-child(4n + 4)
            border none
</style>
