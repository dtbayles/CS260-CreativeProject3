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

            <button class="btn btn-info"><a @click="addToTeam(player)">Add to team</a></button>
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
    players: Array
  },
  methods: {
    addToTeam(player) {
      this.$root.$data.myTeam.push(player);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.player{
  
}
.card {
  width: 12rem;
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

a {
  color: black;
}

</style>
