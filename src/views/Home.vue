<template>
  <div class="home">
<h1>Pendlaren</h1>


<h2>Stations:</h2>

<!-- button execution getGetolocation (store.action: getLocation)  -->
<button @click="getLocation()">Get stations</button>



<section v-for="stations in showNearStations" :key="stations.id" class="shown-stations">
  <p>{{stations}}</p>
</section>
<section v-for="bussDeparture in showDeparture" :key="bussDeparture.id" class="shown-stations">
  <p>{{bussDeparture.name}}</p>
  <p>{{bussDeparture.date}}</p>
</section>


  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },

computed: {
      showNearStations(){
        return this.$store.state.stations;
      },
      showDeparture(){
        return this.$store.state.bussDeparture;
      }

},
methods: {

     getLocation() {
       this.$store.dispatch('getLocation')
     }
}

}
</script>
