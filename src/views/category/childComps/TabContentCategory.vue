<template>
  <div class="tab-content-category">
    <div v-for="(item, index) in subCategories.list" :key="index" class="category-item">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="" @load="imageLoad">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subCategories: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>
.tab-content-category {
  display: grid;
  grid-template-columns: 25% 25% 25%;
  justify-content: space-evenly;
  grid-row-gap: 10px;
  text-align: center;
  margin-bottom: 20px;
}
.tab-content-category .category-item img {
  width: 100%;
}
</style>