import { createApp } from "vue";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";

const app = createApp(App);

app.use(VueClickAway); // Makes 'v-click-away' directive usable in every component

app.mount("#app");
