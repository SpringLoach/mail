<template>
  <nav-bar class="nav-bar">
    <div slot="left" class="bar-left">
      <div class="left-box">
        <img src="~assets/img/profile/protection.png" alt="">
        <span>消费者权益保护 </span>
        <span>></span>  
      </div>
    </div>
    <div slot="right" class="bar-right"><img src="~assets/img/profile/options.png" alt=""></div>
  </nav-bar>

</template>

<script>
import NavBar from 'components/commom/navbar/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
.nav-bar {
  color: #fff;
  background-color: var(--color-tint);
  box-shadow: 0 1px 1px #ff8198;
  align-items: center;
}
.bar-left {
  font-size: 14px;
  width: 160px;
  line-height: 1.6;
  text-align: center;
}
.left-box {
  padding: 0.2px 7px;
  display: inline-block;
  background-color: #ec5d5d;
  border-radius: 15px;
}
.left-box img {
  vertical-align: middle;
}
.left-box span {
  vertical-align: middle;
}
.left-box span:last-child {
  font-family: serif;
  font-weight: 900;
}
.bar-right img {
  vertical-align: middle;
}

</style>