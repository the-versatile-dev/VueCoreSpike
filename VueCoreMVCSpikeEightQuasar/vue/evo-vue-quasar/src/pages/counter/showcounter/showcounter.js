import Vue from 'vue'
import App from './showcounter.vue'
import store from '../../../store'

new Vue({
     store,
     render: h => h(App)
}).$mount('#showCounterId');

