<template>
	<div class="container">
	  	<h1>{{teamName}}</h1>

	  	<h2 v-if="myTeam.length === 0">You have 0 players selected<br>go to the <router-link to="/players">players</router-link> page to select players</h2>
	  	<h3 v-else>Number of Players on Your Team: {{myTeam.length}}</h3>

      <div class="row">
        <div v-if="starters.length != 0" class="col">
          <h3>Starters ({{starters.length}}/5)</h3>
          <p v-for="starter in starters" :key="starter.name">{{starter.name}} - {{starter.pos}}</p>
        </div>
        <div v-if="bench.length != 0" class="col">
          <h3>Bench ({{bench.length}})</h3>
          <p v-for="player in bench" :key="player.name">{{player.name}} - {{player.pos}}</p>
        </div>
      </div>

	  <UserTeam :myTeam="myTeam" />
	  </div>
</template>

<script>
import UserTeam from "../components/TeamDisplay.vue"
export default {
  name: "MyTeam",
  components: {
  	UserTeam,
  },
  methods: {

  },
  computed: {
  	myTeam() {
  		return this.$root.$data.myTeam;
  	},
    starters() {
      return this.$root.$data.starters;
    },
    bench() {
      return this.$root.$data.bench;
    },
    teamName() {
      return this.$root.$data.teamName;
    }
  },
};
</script>
