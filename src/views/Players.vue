<template>
  <div class="container">
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
  computed: {
  	players() {
  		return this.$root.$data.players;
  	}
  },
};
</script>