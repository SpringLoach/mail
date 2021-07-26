<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-show="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[0].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="item in reservices" :key="item.name">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </span>
    </div>  

  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
          return {}
      }
    }
  },
  computed: {
      reservices() {
          return this.goods.services.slice(1);
      }
  }
}
</script>

<style scoped>
.base-info {
  color: #999;
  margin-top: 15px;
  padding: 0 8px;
  margin-bottom: 20px;
}
.info-title {
  color: #222;
  font-size: 20px;
}
.info-price {
  margin-top: 10px;
}
.info-price .n-price {
  font-size: 22px;
  color: var(--color-high-text);
}
.info-price .o-price {
  text-decoration: line-through;
  margin-left: 8px;
}
.info-price .discount {
  position: relative;
  bottom: 4px;
  font-size: 15px;
  margin-left: 6px;
  background-color: var(--color-high-text);
  color: #fff;
  padding: 3px 5px;
  border-radius: 15px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  line-height: 30px;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-service {
  display: flex;
  justify-content: space-between;
  color: #333;
  font-size: 13px;
}
.info-service img {
  width: 14px;
  height: 14px;
  vertical-align: middle;
}
</style>