<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="item" class="title-item" 
          :class="{active: currentIndex === index}" @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/commom/navbar/NavBar'

export default {
    components: {
        NavBar
    },
    data() {
      return {
          titles: ["商品","参数","评论","推荐"],
          isActive: true
      }
    },
    props: {
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    methods: {
      titleClick(index) {   
          this.$emit('titleClick', index);
      },
      backClick() {
          this.$router.back();
      }
    }
}
</script>

<style>
.back img {
    vertical-align: middle;
}
.title {
    display: flex;
}
.title-item {
    flex: 1;
}
.active {
    color: var(--color-high-text);
}
</style>