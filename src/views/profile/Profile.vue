<template>
  <div class="profile">
    <profile-nav-bar class="nav-bar"></profile-nav-bar>
    <scroll class="scroll">
      <user-info></user-info>
      <other-info :otherData="otherData"></other-info>
      <list-view :listView="listView1"></list-view>
      <list-view :listView="listView2"></list-view>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </scroll>
  </div>
</template>
<script>
import UserInfo from './childComps/UserInfo'
import OtherInfo from './childComps/OtherInfo'
import ListView from './childComps/ListView'
import ProfileNavBar from './childComps//ProfileNavBar'

import NavBar from 'components/commom/navbar/NavBar'
import Scroll from 'components/commom/scroll/Scroll'

export default {
  components: {
    NavBar,
    UserInfo,
    OtherInfo,
    ListView,
    Scroll,
    ProfileNavBar
  },
  data() {
    return {
      otherData: [{counter: '0.00', unit: '元', desc: '我的余额'},
                  {counter: '0', unit: '个', desc: '我的优惠'},
                  {counter: '0', unit: '分', desc: '我的积分'}
                 ],
      listView1: [{img: require("assets/img/profile/message.png"), text: "我的消息"},
                  {img: require("assets/img/profile/count.png"), text: "积分商城"},
                  {img: require("assets/img/profile/vip.png"), text: "会员卡"},
                 ],
      listView2: [{img: require("assets/img/profile/cart.png"), text: "我的购物车"},
                  {img: require("assets/img/profile/buy.png"), text: "下载购物APP"}
                 ]
    }
  }
}
</script>

<style scoped>
.profile {
  background-color: #f1f1f1;
}
.nav-bar {
  position: relative;
  z-index: 10;
}
.scroll {
  height: calc(100vh - 44px - 49px);
}
</style>