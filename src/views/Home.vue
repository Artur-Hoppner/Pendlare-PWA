<template>
  <div class="home">

<header>
<img class="buslogo" src="../assets/buslogo.png" alt="buslogo">

<h1>Pendlaren</h1>
</header>

<h2>Transportmedel</h2>
<!-- two way binding with v-model through computed set & get and mutation that gives value of checkboxes to state.message[] -->
<div class="transportation-checkbox">
<label for="buss">Buss</label>
<input type="checkbox" id=128 value=128 v-model="vehicleNr">

<label for="Tubbelbana">Tubbelbana</label>
<input type="checkbox" id=32 value=32 v-model="vehicleNr">

<label for="Regionaltåg">Regionaltåg</label>
<input type="checkbox" id=4 value=4 v-model="vehicleNr">

<label for="Färja">Färja</label>
<input type="checkbox" id=256 value=256 v-model="vehicleNr">
</div>
<!-- button execution getGetolocation (store.action: getLocation)  -->

<button @click="getStaion()">Min Position</button>

<main>


<div class="stations">
<h3>Närliggande Stationer:</h3>


<section v-for="stations in showNearStations" :key="stations.id" class="shown-stations">
  <div @click="getTransportations(stations.id)" class="stations-container" >
  <p>{{stations.name}}</p>
  <p>{{stations.dist}}meter</p>

</div>
   <!-- <button @click="getTransportations(stations.id)">Get Transportations</button> -->
</section>
</div>


    <div class="departure">
      <h3>Avgångar:</h3>

          <section v-for="bussDeparture in showDeparture" :key="bussDeparture.id" class="shown-departure">
            <p>{{bussDeparture.name}}</p>
            <p>{{bussDeparture.time}}</p>
            <!-- <p>{{bussDeparture.direction}}</p> -->
          </section>
    </div>
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

<style lang="scss" scoped>

.home{
  display: flex;
  align-items: center;
  flex-direction: column;
  }

  .transportation-checkbox {
  display: flex;
  flex-direction: row;
  margin: -2vh 0 1vh 0;

  }

header{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
     .buslogo {
        width: 12vw;       
        height: 12vw;
    }
}
main{
  display: flex;
  flex-direction: row;
}

.stations{
  display: flex;
  flex-direction: column;
}

.departure {
  display: flex;
  flex-direction: column;
}


 p {
  color: rgb(255, 185, 185);
};

.shown-stations {
  border: solid 1px, rgb(255, 185, 185);
  margin: 1%;
}

.stations-container {

  border: solid 2px rgb(255, 185, 185);
  width: 25vw;

}
.shown-departure {
    border: solid 1px, rgb(255, 185, 185);
  margin: 1%;
}
</style>