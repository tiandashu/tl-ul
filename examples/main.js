import Vue from 'vue'
import App from './app.vue'



import TlButton from '../packages/button'
Vue.use(TlButton)
new Vue({
  render: h => h(App),
}).$mount('#app')