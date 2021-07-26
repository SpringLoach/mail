export default {
    addCart(context, payload) {
        return new Promise((resolve) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

            if (oldProduct){
              context.commit('addCounter', oldProduct);
              resolve('当前商品数量+1');
            } else {
              context.commit('addToCart', payload);
              resolve('成功添加到购物车~');
            }
        }) 
    }
}