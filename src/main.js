import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VeeValidate, { Validator } from "vee-validate";
import TelaJogo from "./components/screens/TelaJogo";
import Home from "./components/screens/Home";
import ptBR from 'vee-validate/dist/locale/pt_BR'


Validator.localize('pt_BR', ptBR);

Vue.config.productionTip = false;

Vue.use(VeeValidate);

Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { name: 'TelaJogo', path: '/', component: TelaJogo }
];

const router = new VueRouter({ 
  routes 
});


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");




