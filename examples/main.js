import Vue from 'vue'
import App from './app.vue'

import TlButton from 'tl-ul'
Vue.use(TlButton)

new Vue({
  render: h => h(App),
}).$mount('#app')