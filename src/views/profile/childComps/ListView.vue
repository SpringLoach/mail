<template>
  <div class="list-view">
    <div class="list-view-item" v-for="item in listView" :key="item.text">
      <img class="item-img" :src="item.img" alt="">
      <div class="item-desc">
        <span class="item-text">{{item.text}}</span>
        <span>></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listView: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.list-view {
  background-color: #fff;
  box-shadow: 1px 1px 1px #dbdbdb;
  color: #000;
  margin: 12px 10px 0;  
  border-radius: 12px;
  font-size: 18px;
}
.list-view-item {
  padding: 0 10px;
  display: flex;
  align-items: center;
}
.list-view-item .item-desc span:last-child {
  font-family: serif;
  font-weight: 900;
  color: #cfcece;
}
.list-view-item .item-img {
  margin-right: 8px;
  vertical-align: middle;
}
.list-view-item .item-desc {
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 0.1px solid #f1f1f1;
}
.list-view-item:last-child .item-desc{
  border-bottom: 0;
}
</style>