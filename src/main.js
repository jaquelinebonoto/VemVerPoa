import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VeeValidate, { Validator } from "vee-validate";
import pt_BR from "vee-validate/dist/locale/pt_BR";

import Login from "./components/screens/Login";
import Home from "./components/screens/Home";

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Validator.localize("pt_BR", pt_BR);
VeeValidate.Validator.extend("isDBC", {
  getMessage: "Você precisa de um email dbc para acessar esse aplicativo.",
  validate: value => value.split("@")[1] === "dbccompany.com"
});

Vue.use(VueRouter);
const routes = [
  { path: "/", component: Login },
  { name: "Home", path: "/home/:usuario", component: Home }
];
const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
