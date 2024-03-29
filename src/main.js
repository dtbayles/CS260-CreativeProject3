import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import playerStats from "./test.js";

let data = {
	players: playerStats,
	myTeam: [],
	starters: [],
	bench: [],
	teamName: 'Design Your Team',
	}

Vue.config.productionTip = false;

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
