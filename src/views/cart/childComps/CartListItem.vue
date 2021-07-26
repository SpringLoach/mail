<template>
    <div class="cart-list-item">
        <div class="check-button">
          <check-button :is-checked="product.checked" @click.native="checkClick"></check-button>
        </div>
        <div class="item">
          <div class="image-box">
            <img class="item-image" :src="product.image">  
          </div>
          <div class="item-info">  
            <div class="info-top">{{product.title}}</div>
            <div class="info-middle">{{product.desc}}</div>
            <div class="info-bottom">
              <div class="info-price">¥{{product.price}}</div>
              <div class="info-count">x{{product.count}}</div>
            </div>      
          </div>
        </div>
    </div>
</template>a

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
          return {}
      }  
    }
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    }
  }
}
</script>

<style scoped>
.cart-list-item {
  display: flex;
  padding: 5px 5px 5px 0;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  margin-bottom: 5px;
}
.check-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 10px;
}
.item {
  display: flex;
  flex: 1;
}
.image-box {
  padding-right: 10px;
  position: relative;
}
.item-image {
  /* width: 21vw; */
  width: 80px;
  height: 120px; 
  border-radius: 5px;
}
.item-info {
  flex: 1;
  position: relative;
}
.item-info .info-top,.item-info .info-middle {
  width: 63vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-info .info-top {
  font-size: 17px;
  color: #333;
}
.item-info .info-middle {
  font-size: 14px;
  color: #666;
  padding: 15px 0 0;
}
.info-bottom {
  /* 左右定位 */ 
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 5px;
  left: 5px;
  right: 10px;
}
.info-price {
  color: orangered;
}
</style>