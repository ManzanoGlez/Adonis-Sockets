// @ts-nocheck
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import babelPolyfill from "babel-polyfill";///Super necesario no remover
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Ws from "@adonisjs/websocket-client";
import WsPlugin from "adonis-vue-websocket";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(WsPlugin, { adonisWS: Ws });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
