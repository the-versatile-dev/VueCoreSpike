import { createApp } from "vue";
import App from './showcounter.vue'
import store from '../../../store'


const app = createApp(App).use(store);

app.config.productionTip = false;
app.config.devtools = true;

//app.component("counter", require("./counter.vue").default);

app.mount("#showCounterId");