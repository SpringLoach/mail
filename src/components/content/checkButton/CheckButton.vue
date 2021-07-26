<template>
  <div>
    <div v-if="isChecked" class="check-button"> 
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
    <div v-else class="nocheck-button"> 
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-button {
  width: 18px;
  height: 18px;
  background-color: var(--color-tint);
  border-radius: 50%;
}
.check-button img {
  width: 14px;
  height: 14px;
  position: relative;
  right: -1.5px;
  top: 2px;
}
.nocheck-button {
  width:18px;
  height:18px;
  border: 1px solid var(--color-tint);
  border-radius: 50%;
}
</style>