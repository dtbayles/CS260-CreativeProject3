<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <PlayerDisplay :players="players" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import PlayerDisplay from "../components/PlayerDisplay.vue"

export default {
  name: "Home",
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
