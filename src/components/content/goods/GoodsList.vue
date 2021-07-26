<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :good="item" :key="item.link"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  components: {
    GoodsListItem
  },
  props: {
      goods: {
          type: Array,
          default() {
              return []
          }
      }
  }
}
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3px;
}
</style>