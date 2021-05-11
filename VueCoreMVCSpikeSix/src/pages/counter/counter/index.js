import { createApp } from "vue";
import App from './counter.vue'
const app = createApp(App);

app.config.productionTip = false;
app.config.devtools = true;

//app.component("counter", require("./counter.vue").default);

app.mount("#counterId");