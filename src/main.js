import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import VueScrollTo from 'vue-scrollto'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  easing: 'ease-out',
}); // this comes first

new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
