<template>
  <div class="user-info">
      <div class="info-left"><img src="~assets/img/profile/mine.png" alt=""></div>
      <div class="info-middle">
          <div class="middle-register">登录/注册</div>
          <div class="middle-mobile"><img src="~assets/img/profile/mobile.png" alt="">暂无绑定手机号</div>
      </div>
      <div class="info-right">></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.user-info {
  display: flex;
  align-items: center;
  color: #fff;
  /* background-color: #ffa4a4; */
  /* background-color: #ff8888; */
  background-color: #ff8198;
  padding: 12px 14px;
}
.info-left {
  margin-right: 14px;
}
.info-left img{
  border-radius: 50%;
  padding: 10px;
  background-color: rgb(248, 211, 211);
}
.info-middle {
  flex: 1;
}
.middle-register {
  font-size: 18px;
  padding-bottom: 6px;
}
.middle-mobile {
  font-size: 14px;
}
.middle-mobile img {
  vertical-align: middle;
}
.info-right {
  font-family: serif;
  font-weight: 900;
}
</style>