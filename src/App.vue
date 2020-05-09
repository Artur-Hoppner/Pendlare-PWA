<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/End">The End</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #FFB9B9;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #FFB9B9;

    &.router-link-exact-active {
      color: rgb(54, 54, 54);
    }
  }
}
</style>
