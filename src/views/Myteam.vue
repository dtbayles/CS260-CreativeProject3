<template>
	<div class="container">
	  	<h1>Your Team</h1>
	  	
	  	<h2 v-if="myTeam.length === 0">You have 0 players selected</h2>
	  	<h3 v-else>Number of Players on Team: {{myTeam.length}}</h3>
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
  computed: {
  	myTeam() {
  		return this.$root.$data.myTeam;
  	}
  },
};
</script>
