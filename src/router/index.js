import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Teams from "../views/Teams.vue";
import Players from "../views/Players.vue";
import MyTeam from "../views/Myteam.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams
  },
  {
    path: "/players",
    name: "Players",
    component: Players
  },
  {
    path: "/myteam",
    name: "MyTeam",
    component: MyTeam
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
