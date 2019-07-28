import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import Buefy from 'buefy'
import '@mdi/font/css/materialdesignicons.css'
// import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

console.log('Starting client app!')

Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
