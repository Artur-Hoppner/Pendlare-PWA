<template>
  <div class="home">


<main>
<h1>Pendlaren</h1>


<h2>Stations:</h2>

<!-- button execution getGetolocation (store.action: getLocation)  -->
<button @click="getStaion()">Get stations</button>



<section v-for="stations in showNearStations" :key="stations.id" class="shown-stations">
  <p>{{stations.name}}</p>
  <p>{{stations.dist}}meter</p>

   <div><button @click="getTransportations(stations.id)">Get Transportations</button> </div> 


</section>
    <section v-for="bussDeparture in showDeparture" :key="bussDeparture.id" class="shown-departure">
      <p>{{bussDeparture.name}}</p>
      <p>{{bussDeparture.time}}</p>
      <p>{{bussDeparture.direction}}</p>

    </section>

        <section v-for="geolocation in geolocation" :key="geolocation.id" class="shown-departure">
      <p>{{geolocation.longitude}}</p>


    </section>

</main>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },

computed: {

        geolocation(){
        return this.$store.state.geolocation;
      },
      showNearStations(){
        return this.$store.state.stations;
      },
      showDeparture(){
        return this.$store.state.bussDeparture;
      },
      

},
methods: {

     getStaion() {
       this.$store.dispatch('getLocation')
     },
          getTransportations(stations) {
       this.$store.dispatch('getTidtabellavgång', stations)
     }

     

},
watch: {
  // Activates get station when geolcation is found
      geolocation(){ 
        console.log("test")
        this.$store.dispatch('getStations')
}
      
      
}

}
</script>
<style scoped>

 p {
  color: #FFB9B9;
};

.shown-stations {
border: solid 1px, rgb(10, 209, 209);
}

</style>