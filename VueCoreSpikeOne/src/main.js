import Vue from 'vue'
//import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.component('users-grid', require('./components/home/UsersGrid.vue').default);
Vue.component('user-card', require('./components/admin/UserCard.vue').default);
Vue.component('users-card-grid', require('./components/admin/UserCardGrid.vue').default);

new Vue({
  vuetify
}).$mount('#appVue');

window.Vue = Vue;
