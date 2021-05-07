import { createApp } from "vue";
//import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";


const app = createApp(App)
  .use(store)
  .use(router)

app.config.productionTip = false;
app.config.devtools = true;

app.component("counter", require("./components/home/Counter.vue").default);
app.component("view-counter", require("./components/home/ViewCounter.vue").default);
//Vue.component('counter', require('./components/Counter.vue').default)
//Vue.component('view-counter', require('./components/ViewCounter.vue').default)

//console.log("Vue Version " + Vue.version );
//debugger;
app.mount("#app");

//Vue.config.productionTip = false

//window.Vue = app;

//new Vue({
//    Vuex,
//    router,
//    store
//}).$mount('#app');

//window.Vue = Vue;
