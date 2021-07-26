<template>
  <div v-if="Object.keys(commentInfo).length !== 0"  class="comment-info">
    <div class="info-header">
      <span class="header-title">用户评价</span>
      <span class="header-more">更多</span>
    </div>
    <div class='info-user'>
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>  
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentCreate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img v-for="(item, index) in commentInfo.images" :src="item" :key="index">  
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils'

export default {
  components: {
    formatDate
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
          return {}
      }
    }  
  },
  computed: {
    commentCreate() {
      let date = new Date(this.commentInfo.created*1000);
      return formatDate(date, 'yyyy-MM-dd');
    }
  }
}
</script>

<style scoped>
.comment-info {
  color: #333;
  padding: 0 12px 20px;
  border-bottom: 5px solid #f2f5f8;
}
.info-header {
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.info-header .header-title {
  font-size: 15px;
}
.info-header .header-more {
  font-size: 13px;
}
.info-user {
  padding: 10px 0;
  font-size: 15px;
}
.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 8px;
}
.info-detail p {
  font-size: 14px;
  color: #777;
}
.info-detail .info-other {
  color: #999;
  font-size: 12px;
  padding: 8px 0 12px;
}
.info-detail .info-other .date {
  margin-right: 10px;
}
.info-detail .info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>