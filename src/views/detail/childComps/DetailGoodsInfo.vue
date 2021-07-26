<template>
  <div v-if="Object.keys(detailGoodsInfo).length !== 0" class="goods-info">
      <div class="info-desc clearfix">
          <div class="start"></div>
          <div class="desc">{{detailGoodsInfo.desc}}</div>
          <div class="end"></div>
        </div>
      <div class="info-key">{{detailGoodsInfo.detailImage[0].key}}</div>
      <div class="info-list">
          <img v-for="item in detailGoodsInfo.detailImage[0].list" :src="item" :key="item">
      </div>
  </div>
</template>

<script>
export default {
  props: {
      detailGoodsInfo: {
          type: Object,
          default() {
              return {}
          }
      }
  }
}
</script>

<style>
.goods-info {
    padding-top: 15px;
}
.info-desc {
    padding: 0 12px;
}
.info-desc .start, .info-desc .end {
    width: 25vw;
    height: 2px;
    background-color: #a3a3a5;
    position: relative;
}
.info-desc .start {
    float: left;
}
.info-desc .end {
    float: right;
}
.info-desc .start::before,.info-desc .end::after {
    content: "";
    background-color: #333;
    height: 5px;
    width: 5px;
    position: absolute;
}
.info-desc .end::after {
    right: 0;
    bottom: 0;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}
.info-key {
  padding: 10px 12px;
  font-size: 15px;
  color: #333;
}
.info-list img {
  width: 100%;
}
</style>