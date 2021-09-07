import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tail.css";
import Maska from "maska";

import router from "./router/index";

createApp(App).use(router).use(Maska).mount("#app");
