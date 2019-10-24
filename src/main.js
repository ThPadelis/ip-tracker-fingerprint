import Vue from "vue";
import App from "./App.vue";
import VueClipboard from "vue-clipboard2";
import VueSweetalert2 from "vue-sweetalert2";
import VueAnalytics from "vue-analytics";
import "sweetalert2/dist/sweetalert2.min.css";

import "./registerServiceWorker";
import "./filters";

const isProd = process.env.NODE_ENV === "production";

Vue.use(VueClipboard);
Vue.use(VueSweetalert2);
Vue.use(VueAnalytics, {
  id: "UA-150833261-1",
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
