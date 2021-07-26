<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="info-size" v-for="(table, index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="info in paramInfo.infos" :key="info.key">
        <td class="info-param-key">{{info.key}}</td>
        <td class="info-param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
        <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
      paramInfo: {
          type: Object,
          default() {
              return {}
          }
      }
  }
}
</script>

<style>
.param-info {
  padding: 10px 15px 0;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
}
.param-info tr td {
  padding: 14px 0;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.param-info .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
}
.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}
.info-param-value {
  color: #eb4868;
}

.info-img img {
    width: 100%;
}
</style>
