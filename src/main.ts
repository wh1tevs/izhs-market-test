import { createApp } from "vue";
import { IonicVue } from "@ionic/vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/base.css";
import "@ionic/vue/css/core.css";
import "@/theme/variables.css";

const app = createApp(App);

app.use(IonicVue);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
