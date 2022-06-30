import Vue from "vue";
import App from "./App.vue";
import Boot from "bootstrap-vue";
import router from "@/router";
Vue.config.productionTip = false;

Vue.use(Boot);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue";

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");