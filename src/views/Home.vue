<template>
  <div class="home">
<h1>Pendlaren</h1>


<h2>Stations:</h2>

<!-- button execution getGetolocation (store.action: getLocation)  -->
<button @click="getLocation()" >Get location (connecting )</button>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },

methods: {

     getLocation() {
       this.$store.dispatch('getLocation')
     }
}

}
</script>
