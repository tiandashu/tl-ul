import TlButton from './src/button.vue'

TlButton.install = function(Vue) {
  Vue.component(TlButton.name, TlButton)
}

export default TlButton