import { createApp } from "vue";
import App from './contact.vue'

const app = createApp(App);

app.config.productionTip = false;
app.config.devtools = true;

//app.component("contact", require("./contact.vue").default);

app.mount("#contactId");