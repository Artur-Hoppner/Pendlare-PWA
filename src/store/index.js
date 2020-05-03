import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      geolocation: {},
      stations: [],
      bussDeparture: []

  },
  mutations: {
    addGeolocation(state, item) {
      console.log(item, "current, location mutation")
      state.geolocation.push();
    },

    // addStations(state, item) {
    //   state.stations.push(item)
    // },
    // addbussDeparture(state, item) {
    //   state.bussDeparture.push({item})
    // },

  },

  actions: {
     getLocation({commit}) {
      if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(  (position) =>{
             console.log("get")
             let currentLocation = position.coords;
             console.log(currentLocation, "current, location action")

             commit("addGeolocation", currentLocation)
            //  store.dispatch(getReseplanerare(currentLocation));       
         })} else {
             console.log("Error, cant get Geolocation!");
         }
     }

    //  async getReseplanerare({commit}, currentLocation) {
    //   const apiKeyReseplanerare = '52f3c92f-0f19-4ac4-92d1-72da58f3e3ec'
    //   const baseUrlReseplanerare = "https://api.resrobot.se/v2/location.nearbystops?"
    //   let latitude = currentLocation.latitude;
    //   console.log("Getting Latitude;", latitude)
    //   let longitude = currentLocation.longitude;
    //   console.log("Getting Longitude;",longitude)
    
    //     url = `${baseUrlReseplanerare}key=${apiKeyReseplanerare}&originCoordLat=${latitude}&originCoordLong=${longitude}&format=json`;
      
    //   try{
    //     let response = await fetch(url);
    //     let data = await response.json();
    //     commit('addStations', data)

    //     } catch (err) {
    //       console.log(error, "error getReseplanerare", "9");
    //   }
    // return
    // }
  },

  modules: {
  }
})
