import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      dateTime: {"date": "2017-12-20", "time": "14:20:20"},
      meansOfTransportations: "", // create action for checkbox and mutation for action. Link it to component
      geolocation: "",
      stations: "",
      bussDeparture: "", //time, find a good time addon.
      vehicleNr: []

  },
  mutations: {
    // ***** Alternative solution for injecting data into state.geolocation
          // addGeolocation (state, item) {
          //   state.geolocation = item;
          //   console.log(state.geolocation, 'MUTATION addGeolocation: store.state.geolocation')
          // },

    addGeolocation: (state, item) => (state.geolocation = item, console.log(state.geolocation, 'MUTATION addGeolocation: store.state.geolocation')),

    addStations(state, item) {
      state.stations = item.StopLocation
      console.log(state.stations, 'MUTATION addStations: store.state.stations')
    },
    addbussDeparture(state, item) {
      state.bussDeparture = item.Departure
      console.log(state.bussDeparture, 'MUTATION addbussDeparture: store.state.bussDeparture')
    },
    updateVehicleNr (state, value) {
      state.vehicleNr = value
    }
  },

  actions: {
// ***** GET GEOLOCATION *****
     getLocation({commit, state}) {
      console.log("Executing ACTION: getLocation")
      console.log(state.vehicleNr.map(numStr => parseInt(numStr)).reduce((a, b) => a + b, 0), "testing") 
      if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (position) =>{
             let currentLocation =  position.coords;
              commit("addGeolocation", currentLocation);

         })} else {
             console.log("Error, cant get Geolocation!");
         }
     },


     // ***** GETTING STATIONS DATA FROM API *****
    async getStations({commit, state}){
        // Function is activated through a watcher in Home.Vue when store.state.
        console.log("Executing ACTION: getStations")
        const apiKeyReseplanerare = '52f3c92f-0f19-4ac4-92d1-72da58f3e3ec'
        const baseUrlReseplanerare = "https://api.resrobot.se/v2/location.nearbystops?"
        let latitude = state.geolocation.latitude
        let longitude = state.geolocation.longitude
        let  url = `${baseUrlReseplanerare}key=${apiKeyReseplanerare}&originCoordLat=${latitude}&originCoordLong=${longitude}&format=json`;
        
        try{
          let response = await fetch(url);
          let data = await response.json();
          commit('addStations', data)
           } catch (error) {
              console.log(error, "error getStations");
      }
    },

    
    // ***** GETTING DEPARTURE DATA FROM API *****
        async getTidtabellavgång({commit, state}, stations){

      console.log("Executing ACTION getTidtabellavgång")
      const apiKeyTidtabell = '7b420a2e-669c-49f1-bb4d-e58c2a98db54';
      const baseUrlTidtabellavgång = 'https://api.resrobot.se/v2/departureBoard?';
      let stationId = stations;
      let meansOfTransportations = state.vehicleNr.map(numStr => parseInt(numStr)).reduce((a, b) => a + b, 0);
      let dateOfDeparture = ""; // EX: "2017-12-20" state.dateTime.date
      let timeOfDeparture = ""; // EX: "14:20:20" state.dateTime.time


      let url = `${baseUrlTidtabellavgång}key=${apiKeyTidtabell}&id=${stationId}&maxJourneys=4&products=${meansOfTransportations}&date=${dateOfDeparture}&time=${timeOfDeparture}&format=json` 
      
        try{
          let response = await fetch(url);
          let data = await response.json();
          commit('addbussDeparture', data)
           } catch (error) {
              console.log(error, "error getStations");
        }
    }, 


  },

  modules: {
  }
})


