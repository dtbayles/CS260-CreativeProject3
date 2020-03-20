<template>
  <div class="container">

    <div class="row justify-content-center">
      <div class="player col-sm" v-for="player in players" :key="player.name">
        <div class="card mx-auto mb-4 bg-dark text-white">
          <img class="card-img-top" :src="player.imgURL" :alt="player.name">
          <div class="card-body">
            <h5 class="card-title">{{player.name}}</h5>

              <div class="row text-left">
                <div class="col">
                  <p class="card-text">Pos: {{player.pos}}</p>
                  <p class="card-text">Height: {{player.hgt}}"</p>
                  <p class="card-text">Weight: {{player.weight}}</p>
                  <p class="card-text">Age: {{2020 - player.born.year}}</p>
                </div>
                
                <div class="col">
                <p class="card-text">FG%: {{player.ratings[0].fg}}</p>
                <p class="card-text">FT%: {{player.ratings[0].ft}}</p>
                <p class="card-text">Str: {{player.ratings[0].stre}}</p>
                <p class="card-text">Spd: {{player.ratings[0].spd}}</p>
                </div>
              </div>

                <button @click="addToTeam(player)" class="btn btn-info mt-5"><a>Add to Team</a></button>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "PlayerDisplay",
  props: {
    players: Array,
  },
  methods: {
    addToTeam(player) {
      if (this.$root.$data.myTeam.includes(player)) {
        return;
      }
      else {
        this.$root.$data.myTeam.push(player);
        this.$root.$data.players.pop;
      }
    },
  computed: {
    button() {
      return 'test';
      /*
      if (this.$root.$data.myTeam.includes(this.player)) {
        return "something";
      }
      else {
        return "Added";
      }
      */
    }
  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.player{
  
}
.card {
  width: 12rem;
  height: 387px;
}
.card-img-top {
  max-height: 138px;
}
.card:first-child {
  margin-top: 20px;
}
.card-body .row{
  font-size: 13px;
  letter-spacing: 0px;
  line-height: 7px;
}
.card-body .row .col{
  padding: 0 0 1em 0.9em;
}
.btn {
  vertical-align: bottom;
}
a {
  color: black;
}

</style>
