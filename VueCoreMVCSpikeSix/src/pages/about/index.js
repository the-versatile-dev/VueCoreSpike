import { createApp } from "vue";
import App from './about.vue'
const app = createApp(App);

app.config.productionTip = false;
app.config.devtools = true;

//app.component("about", require("./about.vue").default);

app.mount("#aboutId");