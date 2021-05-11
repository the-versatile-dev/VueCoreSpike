import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


debugger;
createApp(App)
    .use(store)
    .use(router)
    .component("contact", require("../src/pages/contact/contact.vue").default)
    .mount('#app');
