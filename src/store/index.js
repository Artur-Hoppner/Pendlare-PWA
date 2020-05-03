import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      geolocation: [],
      stations: [],
      bussDeparture: []

  },
  mutations: {
    addGeolocation (state, item) {
      console.log(item.longitude, "current, location mutation")
      state.geolocation.push(item)
      console.log(state.geolocation, "state")

    },

    addStations(state, item) {
      state.stations.push(item)
      console.log(state.stations, "station in state")
    },
    // addbussDeparture(state, item) {
    //   state.bussDeparture.push({item})
    // },

  },

  actions: {
     getLocation({commit, dispatch}) {
      if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(  (position) =>{
             console.log("get")
             let currentLocation = position.coords;
             console.log(currentLocation, "current, location action");
             commit("addGeolocation", currentLocation);
             dispatch('getReseplanerare');

         })} else {
             console.log("Error, cant get Geolocation!");
         }
     },

     async getReseplanerare({commit}) {
       console.log("stating getReseplanerare")
      // const apiKeyReseplanerare = '52f3c92f-0f19-4ac4-92d1-72da58f3e3ec'
      // const baseUrlReseplanerare = "https://api.resrobot.se/v2/location.nearbystops?"
      // let latitude = currentLocation.latitude;
      // console.log("Getting Latitude;", latitude)
      // let longitude = currentLocation.longitude;
      // console.log("Getting Longitude;",longitude)
    
      //   url = `https://api.resrobot.se/v2/location.nearbystops?key=52f3c92f-0f19-4ac4-92d1-72da58f3e3ec&originCoordLat=59.30352639999999&originCoordLong=18.1403648&format=json`;
      try{
        let response = await fetch('https://api.resrobot.se/v2/location.nearbystops?key=52f3c92f-0f19-4ac4-92d1-72da58f3e3ec&originCoordLat=59.30352639999999&originCoordLong=18.1403648&format=json');
        let data = await response.json();
        commit('addStations', data)
        console.log(data, "data in async")

        } catch (err) {
          console.log(error, "error getReseplanerare", "9");
      }
    return
    }
  },

  modules: {
  }
})
