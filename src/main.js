import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/commom/toast'

import FastClick from 'fastclick'

Vue.config.productionTip = false

Vue.use(toast)

Vue.prototype.$bus = new Vue()

FastClick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
