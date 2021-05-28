import Vue from 'vue'
import App from './basic-input.vue'
import '../../quasar'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#quasar-app');


