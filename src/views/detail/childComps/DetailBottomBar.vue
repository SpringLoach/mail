<template>
  <div class="bottom-bar">
      <div class="bar-left">
        <div>
          <i class="icon service"></i>
          <p>客服</p>
        </div>
        <div>
          <i class="icon shop"></i>
          <p>店铺</p>
        </div>
        <div>
          <i class="icon select"></i>
          <p>收藏</p>
        </div>  
      </div>
      <div class="bar-right">
          <span class="cart" @click="addToCart">加入购物车</span>
          <span class="buy">购买</span>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart(){
      this.$emit('addCart');
    }
  }
} 
</script>

<style scoped>
.bottom-bar {
  background-color: #fff;
  display: flex;
  position: relative;
  z-index: 11;
  height: 49px;
}
.bottom-bar .bar-left, .bottom-bar .bar-right {
  flex: 1;
  display: flex;
  text-align: center;
}
.bottom-bar .bar-left {
  padding-top: 3px;
  font-size: 14px;
}
.bottom-bar .bar-left>div, .bottom-bar .bar-right>span {
  flex: 1;
}
.bar-left .icon {
  display: block;
  width: 20px;
  height: 20px;
  margin: 4px auto 4px;
}
.bar-left .service {background: url("~assets/img/detail/detail_bottom.png") 0 41%/100%;}
.bar-left .shop {background: url("~assets/img/detail/detail_bottom.png") 0 77%/100%;}
.bar-left .select {background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;}

.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 49px;
}
.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}
.bar-right .buy {
  background-color: #f69;
}
</style>