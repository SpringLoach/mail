<template>
  <div class="otherinfo">
    <div class="otherinfoItem" v-for="item in otherData" :key="item.desc" :style="{}">
      <span class="counter">{{item.counter}}</span>
      <span class="unit">{{item.unit}}</span>
      <div class="desc">{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    otherData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.otherinfo {
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 1px #dbdbdb;
  background-color: #fff;
  margin: 10px 10px 0;
  border-radius: 12px;
}
.otherinfoItem {
  flex: 1;
  color: #000;
  font-size: 13px;
  margin: 15px auto;
  border-right: 1px solid #dbdbdb;
  text-align: center;
}
.otherinfoItem:last-child {
  border-right: 0;
}
.otherinfoItem .counter {
  color: var(--color-high-text);
  font-size: 20px;
  font-weight: 700;
}
.otherinfoItem .desc {
  padding-top: 4px;
}

</style>