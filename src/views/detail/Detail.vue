<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" :currentIndex="currentIndex"></detail-nav-bar>
    <scroll class="detail-scroll" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages" ref="swiper"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailGoodsInfo="detailGoodsInfo"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick"  v-show="isShowBackTop"/>
    <toast/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/commom/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js'

import Toast from 'components/commom/toast/Toast'

export default {
  name: 'Detail',
  components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      Shop,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      BackTop,
      Toast
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailGoodsInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopTs: ['swiper', 'params', 'comment', 'recommend'],
      currentIndex: 0,
      isShowBackTop: false
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages;
      const data = res.result;
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      this.shop = new Shop(res.result.shopInfo);
      this.detailGoodsInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    }),
    getRecommend().then(res => {
      this.recommends = res.data.list;
      console.log(res.data.list);
    })
  },
  methods: {
    titleClick(index) {
      this.$refs.scroll.scroll.scrollToElement(this.$refs[this.themeTopTs[index]].$el, 200);
      this.currentIndex = index;
    },
    contentScroll(position) {
      let length = this.themeTopTs.length;
      let positionY =-position.y;
      for (let i = 0; i < length; i++) {
          if (this.currentIndex !== i && i < length-1 && this.$refs[this.themeTopTs[i]].$el.offsetTop <= positionY && positionY < this.$refs[this.themeTopTs[i+1]].$el.offsetTop) {
            this.currentIndex = i;
          } else if (this.currentIndex !== i && this.$refs[this.themeTopTs[i]].$el.offsetTop <= positionY) {
            this.currentIndex = i;
          }
      }
      this.isShowBackTop = (-position.y) > 1000
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300)
    },
    addToCart(){
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.nowPrice;
      product.iid = this.iid;
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res)
        console.log(this.$toast);
      });
    }
  }
}
</script>

<style>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-scroll{
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>