<template>
  <div class="recommond">
    <div v-for="item in recommends" :key="item.title" class="recommond-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      recommends: {
          type: Array,
          default() {
            return []
          }
      }
  }
}
</script>

<style>

.recommond {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0px 20px;
  border-bottom: 8px solid #eee;
} 
.recommond-item {
  flex: 1;
}
.recommond-item img {
  width: 80%;
  margin-bottom: 5px;
}

</style>