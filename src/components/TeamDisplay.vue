<template>
  <div class="container">


    <div class="row justify-content-center">
      <div class="player col-sm" v-for="player in myTeam" :key="player.name">
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
              <div class="row">
                <div class="btn-group ml-1">
                  <button @click="makeStarter(player)" class="btn btn-info btn-outline-dark"><a>Start</a></button>
                  <button @click="makeBench(player)" class="btn btn-info btn-outline-dark"><a>Bench</a></button>
                  <button @click="removeFromTeam(player)" class="btn btn-info btn-outline-dark"><a>Remove</a></button>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserTeam',
  props: {
    myTeam: Array
  },
  methods: {
    removeFromTeam(player) {
      const teamIndex = this.$root.$data.myTeam.indexOf(player);
      const starterIndex = this.$root.$data.starters.indexOf(player);
      const benchIndex = this.$root.$data.bench.indexOf(player);
      if (starterIndex > -1) {
        this.$root.$data.starters.splice(starterIndex, 1);
      }
      if (teamIndex > -1) {
        this.$root.$data.myTeam.splice(teamIndex, 1);
      }
      
      if (benchIndex > -1) {
        this.$root.$data.bench.splice(benchIndex, 1);
      }
    },
    makeBench(player) {
      if (!this.$root.$data.bench.includes(player) && !this.$root.$data.starters.includes(player)) {
        this.$root.$data.bench.push(player);
      }
      else if (this.$root.$data.starters.includes(player)) {
        const starterIndex = this.$root.$data.starters.indexOf(player);
        this.$root.$data.starters.splice(starterIndex, 1);
        this.$root.$data.bench.push(player);
      }
      else {
        alert('Error, please try another selection');
      }
    },
    makeStarter(player) {
      if (!this.$root.$data.starters.includes(player) && !this.$root.$data.bench.includes(player) && this.$root.$data.starters.length < 5) {
        this.$root.$data.starters.push(player);
      }
      else if (this.$root.$data.bench.includes(player) && this.$root.$data.starters.length < 5) {
        const benchIndex = this.$root.$data.bench.indexOf(player);
        this.$root.$data.bench.splice(benchIndex, 1);
        this.$root.$data.starters.push(player);
      }
      else {
        alert('Error, player is already a starter or the starting lineup is full.');
      }
    }
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player{
  
}
.card {
  width: 12rem;
  height: 335px;
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
.btn{
  max-width: 11rem;
  font-size: 11px;
  letter-spacing: 0px;

}
a {
  color: black;
}

</style>