<template>
    <tab-bar class="tab-bar">
      <tab-bar-item path="/home" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>  
</template>

<script>
import TabBar from "components/commom/tabbar/TabBar"
import TabBarItem from "components/commom/tabbar/TabBarItem"
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
.tab-bar {
  z-index: 8;
}
</style>