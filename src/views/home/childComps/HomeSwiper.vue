<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>  
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/commom/swiper'

export default {
  components: {
    Swiper, 
    SwiperItem
  },
  data() {
    return {
      isLoad: false
    }
  },
  props: {
      banners: {
          type: Array,
          default() {
              return []
          }
      }
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImageLoad');
        this.isLoad = true;
      }
    }
  }
}
</script>

<style>

</style>