import Vue from 'vue'
import App from './App.vue'
import store from '../src/store'
import './quasar'

Vue.config.productionTip = false;

new Vue({
    store, 
    render: h => h(App),
}).$mount('#quasar-app');
