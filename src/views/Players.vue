<template>
  <div class="container">
    <h2>Choose any player to add to your roster</h2>
    <h3 v-if="team.length != 1">You have {{team.length}} players in your roster</h3>
    <h3 v-if="team.length === 1">You have {{team.length}} player in your roster</h3>
    <PlayerDisplay :players="players" />
  </div>
</template>

<script>
import PlayerDisplay from "../components/PlayerDisplay.vue"

export default {
  name: "Players",
  components: {
    PlayerDisplay
  },
  data() {
  	return {
  	}
  },
  methods: {

  },
  computed: {
  	players() {
      return this.$root.$data.players;
  	},
    team() {
      return this.$root.$data.myTeam;
    }
  },
};
</script>