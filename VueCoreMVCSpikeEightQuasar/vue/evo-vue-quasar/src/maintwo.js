import Vue from 'vue'
import AppTwo from './AppTwo.vue'
import './quasar'

Vue.config.productionTip = false;

new Vue({
    render: h => h(AppTwo)
}).$mount('#quasar-app-two')