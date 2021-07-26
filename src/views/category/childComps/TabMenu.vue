<template>
  <scroll class="tab-menu">
    <div v-for="(item, index) in categories" :key="index" 
      class="tab-menu-item" :class="{activeItem: index === currentIndex}" @click="itemClick(index)"> 
      {{item.title}}
    </div>
  </scroll>
</template>

<script>

import Scroll from 'components/commom/scroll/Scroll'

export default {
  components: {
    Scroll
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.$emit('selectItem', index);
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
.tab-menu {
  width: 25%;
  overflow: hidden;
  text-align: center;
  height: 100%;
}
.tab-menu-item {
  padding: 14px 0;
  background-color: #f7f7f7;
  margin: 5px 0;
}
.activeItem {
  color: #ff5777;
  border-left: 3px solid #ff5777;
}
</style>