<template>
  <div class="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import NavBar from 'components/commom/navbar/NavBar'
import Scroll from 'components/commom/scroll/Scroll'
import { mapGetters } from 'vuex'

export default {
   components: {
     NavBar,
     CartList,
     Scroll,
     CartBottomBar
   },
   computed: {
     ...mapGetters([
      'cartLength',
      'cartList'
    ])
  },
  activated() {
    this.$refs.scroll.scroll.refresh();
  }
}
</script>

<style scoped> 
.cart {
    background-color: #f1f1f1;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  height: calc(100vh - 44px - 49px - 50px);
  overflow: hidden;
}
</style>