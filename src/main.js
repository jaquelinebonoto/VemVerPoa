import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VeeValidate, { Validator } from "vee-validate";
import pt_BR from "vee-validate/dist/locale/pt_BR";
import TelaJogo from "./components/screens/TelaJogo";
import Home from "./components/screens/Home";
import TelaFinal from "./components/screens/TelaFinal";
import Formulario from "./components/screens/Formulario";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDdakOtXZKd6xB4tztNhSk5KwbPtMLBDA0",
    libraries: "places,visualization,drawing"
  }
});

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Validator.localize("pt_BR", pt_BR);

Vue.use(VueRouter);
const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "TelaJogo", path: "/jogo", component: TelaJogo },
  { name: "TelaFinal", path: "/social/:pontos", component: TelaFinal },
  { name: "Formulario", path: "/form", component: Formulario }
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
