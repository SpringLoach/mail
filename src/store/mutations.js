export default {
    addCounter(state, payload) {
        payload.count += 1;
    },
    addToCart(state, payload) {
        payload.checked = false;
        payload.count = 1;
        state.cartList.push(payload);
    }
}