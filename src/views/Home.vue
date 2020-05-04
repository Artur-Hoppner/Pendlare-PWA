<template>
  <div class="home">
<h1>Pendlaren</h1>


<h2>Stations:</h2>

<!-- button execution getGetolocation (store.action: getLocation)  -->
<button @click="getStaion()">Get stations</button>



<section v-for="stations in showNearStations" :key="stations.id" class="shown-stations">
  <p>{{stations.name}}</p>
  <p>{{stations.dist}}meter</p>
  <p>{{stations.id}}</p>
   <div><button @click="getTransportations(stations.id)">Get Transportations</button> </div> 


</section>
    <section v-for="bussDeparture in showDeparture" :key="bussDeparture.id" class="shown-stations">
      <p>{{bussDeparture.name}}</p>
      <p>{{bussDeparture.time}}</p>
      <p>{{bussDeparture.direction}}</p>

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

     getStaion() {
       this.$store.dispatch('getLocation')
     },
          getTransportations(stations) {
       this.$store.dispatch('getTidtabellavgång', stations)
     }
}

}
</script>
