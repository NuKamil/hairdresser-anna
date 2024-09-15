import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faBagShopping, faHeart);

import "@/index.css";
import router from "@/router";
import App from "@/App.vue";

const pinia = createPinia();

createApp(App).use(router).use(pinia).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
