import Vue from "vue";
import App from "./App.vue";
import VueClipboard from "vue-clipboard2";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "./registerServiceWorker";
import "./filters";

Vue.use(VueClipboard);
Vue.use(VueSweetalert2);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
