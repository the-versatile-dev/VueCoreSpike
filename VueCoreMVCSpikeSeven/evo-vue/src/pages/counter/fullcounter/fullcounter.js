import { createApp } from "vue";
import App from './fullcounter.vue'
import store from '../../../store'

const app = createApp(App).use(store);

app.config.productionTip = false;
app.config.devtools = true;

app.mount("#fullCounterId");