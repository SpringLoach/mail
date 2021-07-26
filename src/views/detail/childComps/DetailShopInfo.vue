<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left shop-middle-item">
          <div>
            <div class="sells-count">{{shopSell}}</div>
            <div class="sells-text">总销量</div>
          </div>
          <div>
            <div class="goods-count">{{shop.goodsCount}}</div>
            <div class="goods-text">全部宝贝</div>
          </div>
      </div>  
      <div class="shop-middle-right shop-middle-item">
          <table>
            <tr v-for="item in shop.score" :key="item.name">
              <td>{{item.name}}</td>  
              <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>  
              <td v-if="item.isBetter" class="is-better">高</td>  
              <td v-else class="no-better">低</td> 
            </tr>
          </table>
      </div>  
    </div>
    <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
      shopSell() {
          if(this.shop.sells > 1000) {
              return (this.shop.sells/10000).toFixed(1) + '万'
          } else {
              return this.shop.sells
          }
      }
  }
}
</script>

<style>
.shop-info{
  padding: 15px 0;
  border-top: 5px solid #f2f5f8;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top img {
  width: 45px;
  height: 45px;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.1);
}
.shop-middle {
  display: flex;
  text-align: center;
  align-items: center;
  padding: 14px 0;
}
.shop-middle-item {
  flex: 1;
  /* border: 1px solid red; */
}
.shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    border-right: 1px solid rgba(0,0,0,.1);
    color: #333;
}
.sells-count, .goods-count {
  font-size: 18px;
  padding-bottom: 5px;
}
.sells-text, .goods-text {
  font-size: 14px;
}
.shop-middle-right table {
    font-size: 14px;
    color: #333;
    display: inline-block;
    text-align: start;
}
.shop-middle-right table td {
  padding: 3px;
}
/* .shop-middle-right table td:nth-of-type(3n+3) {
  padding: 0px;
} */

.score {
    color: #5ea732;
}
.score-better {
    color: #f13e3a;
}
.is-better {
    color: #fff;
    background-color: #f13e3a;
}
.no-better {
    color: #fff;
    background-color: #5ea732;
}

.shop-bottom {
    text-align: center;
}
.enter-shop {
    display: inline-block;
    font-size: 14px;
    padding: 5px 30px;
    background-color: #f2f5f8;
    border-radius: 10px;
}
</style>