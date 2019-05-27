import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'materialize-css/dist/css/materialize.css';
import swal from 'sweetalert';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2, swal);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
