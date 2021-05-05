import Vue from 'vue'
//import App from './App.vue'
import vuetify from './plugins/vuetify';
//import Vuex from "vuex";
import router from 'vue-router'
//import { store } from './stores';

Vue.config.productionTip = false;

Vue.component('jokes', require('./components/admin/funnies/Jokes.vue').default);
Vue.component('home', require('./components/home/Home.vue').default);
Vue.component('counter', require('./components/home/Counter.vue').default);
Vue.component('users-grid', require('./components/home/UsersGrid.vue').default);
Vue.component('user-card', require('./components/admin/users/UserCard.vue').default);
Vue.component('users-card-grid', require('./components/admin/users/UserCardGrid.vue').default);

new Vue({
    vuetify,
    router, 
  //  store
}).$mount('#app');

window.Vue = Vue;
