<template>
  <div class="container w-50 py-5 text-center">
      <h2>Fantasy Basketball</h2>
      <p class="lead">Trying to cope with the NBA's COVID-19 hiatus? This fantasy basketball app will keep you entertained through every single hour of your quarantine!</p>
      <h4 class="mb-3">Begin Designing your Custom Team!</h4>
      <!--
      <form v-on:submit.prevent="setName" class="needs-validation" novalidate>
        <div class="row">
          <div class="mb-3 mx-auto">
            <label>Team name</label>
            <input v-model="customName" type="text" class="form-control" placeholder="">
            <button class="btn btn-info btn-lg btn-block mt-2">Submit</button>
          </div>
        </div>
      </form>
      <p>{{newName}}</p> -->
  </div>  
</template>

<script>


export default {
  name: "Home",
  components: {

  },
  data() {
  	return {
      customName: "",
  	}
  },
  computed: {
    newName() {
      return this.customName;
    }
  },
};
</script>
