import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      geolocation: "",
      stations: "",
      bussDeparture: ""

  },
  mutations: {
    addGeolocation (state, item) {
      state.geolocation = item;
      console.log(state.geolocation, 'store.state.geolocation[]')

    },

    addStations(state, item) {
      state.stations = item.StopLocation
      console.log(state.stations, 'store.state.stations[]')
    },
    addbussDeparture(state, item) {
      state.bussDeparture = item.Departure
      console.log(state.bussDeparture, 'store.state.bussDeparture[]')

    },

  },

  actions: {
// ***** GET GEOLOCATION *****
     getLocation({commit}) {
      console.log("Executing Action getLocation")
      if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (position) =>{
             let currentLocation =  position.coords;
              commit("addGeolocation", currentLocation);
              // dispatch('getStations');

         })} else {
             console.log("Error, cant get Geolocation!");
         }
     },

     // ***** GETTING STATIONS DATA FROM API *****
    async getStations({commit, state}){

      console.log("Executing Action getStations")
      console.log(state.geolocation.latitude, "latitude in get station")
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


      
    // ***** GETTING DEPARTURE DATA FROM API *****
    },     async getTidtabellavgång({commit}, stations){

      console.log("Executing Action getTidtabellavgång")
      const apiKeyTidtabell = '7b420a2e-669c-49f1-bb4d-e58c2a98db54';
      const baseUrlTidtabellavgång = 'https://api.resrobot.se/v2/departureBoard?';
      let stationId = stations;
    
      let url = `${baseUrlTidtabellavgång}key=${apiKeyTidtabell}&id=${stationId}&maxJourneys=2&format=json` 
      
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
