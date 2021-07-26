<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="active"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
      return {  
      }
  },
  props: {
    path: String,
    activeColor: {
        type: String,
        default: 'red'
    }
  },
  computed: {
    isActive() {
        return this.$route.path != this.path;
    },
    active() {
        return !this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
        this.$router.replace(this.path).catch(err => {});
    }
  }
}
</script>

<style>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
}
.tab-bar-item img{
    height: 20px;
    width: 20px;
    margin-top: 5px;
    vertical-align: middle;
    margin-bottom: 2px;
}
/* .active{
    color: red;
} */
</style>