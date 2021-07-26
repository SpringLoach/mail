<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <check-button :isChecked="isChecked" @click.native="checkClick" />
      <span class="bar-left-text">全选</span>
    </div>
    <div class="bar-right">
      <span class="bar-right-text">合计:<span class="totalprice">{{totalPrice}}</span></span>
      <span class="buy" @click="buyClick">结算{{totalcount}}</span>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import { mapGetters } from 'vuex'


export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters([
      'cartLength',
      'cartList'
    ]),
    totalcount() {
      let x = this.cartList.filter(item => {
            return item.checked
          }).reduce((pre, item) => {
            return pre + item.count}, 0);
      if(x) {
        return "(" + x + ")"
      } else {return ""}
    },
    totalPrice() {
      return '￥' + this.cartList.filter(item => {
            return item.checked
          }).reduce((pre, item) => {
            return pre + item.count * item.price}, 0).toFixed(2)
    },
    isChecked() {
        if(this.cartLength) {
            return !this.cartList.some((item) => {
                return !item.checked
            })
        }
    }
  },
  methods: {
    checkClick() {
        if(this.cartLength) {
            if(this.isChecked) {
                this.cartList.forEach((item) => {
                    item.checked = false;
                })
            } else {
                this.cartList.forEach((item) => {
                    item.checked = true;
                })
            }
        }
    },
    buyClick() {
      if(!this.totalcount) {
         this.$toast.show("请先选择商品")
      }
    }  
  }
}
</script>

<style scoped>
.bottom-bar { 
  display: flex;
  justify-content: space-between;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, .1);
  padding: 5px;
}
.bar-left {
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.bar-left .bar-left-text{
  padding-left: 3px;
  font-size: 15px;
  color: #666;
}
.bar-right {
  display: flex;
  align-items: center; 
}
.bar-right-text {
  color: #222;
  font-size: 15px;
}
.totalprice {
  color: var(--color-high-text);
  font-size: 12px;
}
.buy {
  background-color: var(--color-high-text);
  color: #fff;
  font-size: 17px;
  border-radius: 20px;
  padding: 6px 30px;
  margin-left: 8px;
  
}
</style>