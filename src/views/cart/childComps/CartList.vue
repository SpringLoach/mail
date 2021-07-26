<template>
  <div>
      <cart-list-item v-for="(item, index) in cartList" :product="item" :key="index"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'

export default {
  components: {
      CartListItem
  },
  computed: {
    ...mapGetters([
        'cartList'
    ])
  }
}
</script>

<style>

</style>