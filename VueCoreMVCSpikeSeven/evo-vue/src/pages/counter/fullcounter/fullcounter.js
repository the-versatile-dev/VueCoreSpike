import Vue from 'vue'
import App from './fullcounter.vue'
import store from '../../../store'

new Vue({
    store,
    render: h => h(App)
}).$mount('#fullCounterId');
