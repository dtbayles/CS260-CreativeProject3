<template>
  <div id="app">

    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><img src="/images/nba_logo.png" width="33" height="70"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link"><router-link to="/">Home</router-link></a>
            </li>
           <!-- <li class="nav-item">
              <a class="nav-link"><router-link to="/teams">Teams</router-link></a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link"><router-link to="/players">Players</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/myteam">My Team</router-link></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <router-view />

    <div class="text-center py-3">Drew Bayles © 2020 Copyright
      <a href="https://github.com/dtbayles/CreativeProject3.git"> GitHub Repo</a>
    </div>

  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: overline;
  color: #333333;
  display:block;
}
#nav a:hover {
  
  color: #333333;
  
}
</style>
