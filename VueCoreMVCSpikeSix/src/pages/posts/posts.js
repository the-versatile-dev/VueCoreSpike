import { createApp } from "vue";
import App from './Posts.vue'
import router from '../../router'

const app = createApp(App)
    .use(router);

app.mount("#vuePosts");