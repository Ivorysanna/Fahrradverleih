import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
axios.defaults.baseURL = "http://localhost:3001";

import "@/assets/styles/styles.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.mount("#app");
