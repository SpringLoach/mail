<template>
  <div class="list-item"  @click="itemClick">
    <div class="picbox">
      <img :src="showImage" alt="">
    </div>
    <div class="info">
      <p>{{good.title}}</p>
      <span>{{good.price + ' '}}</span>
      <span><img src="~assets/img/common/collect.svg" alt="">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      good: {
          type: Object,
          default() {
              return {}
          }
      }
  },
  computed: {
    showImage() {
      return (this.good.show && this.good.show.img) || this.good.image || this.good.img 
    }
  },
  methods: {
    itemClick() {
      if(this.good.iid) {
        this.$router.push('/detail/' + this.good.iid)
      } else {
        this.$toast.show('抱歉，没有找到该商品的相关数据')
      }
    }
  }
}
</script>

<style>
.list-item {
  width: 48%;
  text-align: center;
  font-size: 14px;
}
.picbox {
  position: relative;
}
.picbox::before {
  content: "";
  display: block;
  padding-top: 150%;
}
.picbox img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
}
.info {
  /* overflow: hidden; */
  padding: 5px 3px;
}
.info img {
  width: 15px;
  height: 100%;
}
.info p {
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
.info span:nth-of-type(1) {
  color: var(--color-high-text);
}
</style>