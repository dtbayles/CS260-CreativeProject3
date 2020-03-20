import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import players from "./2019-20NBARoster.js";

let data = {
	players: players,
	myTeam: [],
}

Vue.config.productionTip = false;

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
