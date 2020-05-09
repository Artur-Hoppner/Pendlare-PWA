<template>
  <div class="home">


<main>
<h1>Pendlaren</h1>


<h3>Resmedel</h3>
<!-- two way binding with v-model through computed set & get and mutation that gives value of checkboxes to state.message[] -->
<label for="buss">Buss</label>
<input type="checkbox" id=128 value=128 v-model="vehicleNr">

<label for="Tubbelbana">Tubbelbana</label>
<input type="checkbox" id=32 value=32 v-model="vehicleNr">

<label for="Regionaltåg">Regionaltåg</label>
<input type="checkbox" id=4 value=4 v-model="vehicleNr">

<label for="Färja">Färja</label>
<input type="checkbox" id=256 value=256 v-model="vehicleNr">

<!-- button execution getGetolocation (store.action: getLocation)  -->

<button @click="getStaion()">Get stations</button>

<h2>Stations:</h2>


<section v-for="stations in showNearStations" :key="stations.id" class="shown-stations">
  <div class="stations-container">
  <p>{{stations.name}}</p>
  <p>{{stations.dist}}meter</p>

</div>
   <button @click="getTransportations(stations.id)">Get Transportations</button>
</section>

<!-- <select name="" id="">
  <option  v-for="stations in showNearStations" :key="stations.id" @click="getTransportations(stations.id)">{{stations.name}}</option>
</select> -->


<h2>departure:</h2>

    <section v-for="bussDeparture in showDeparture" :key="bussDeparture.id" class="shown-departure">
      <p>{{bussDeparture.name}}</p>
      <p>{{bussDeparture.time}}</p>
      <p>{{bussDeparture.direction}}</p>

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
      vehicleNr: {
          get () {
            return this.$store.state.vehicleNr
          },
          set (value) {
            this.$store.commit('updateVehicleNr', value)
      }
  }
      

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

.stations-container {
  border: solid 1px red;
  width: 20vw;
}
</style>