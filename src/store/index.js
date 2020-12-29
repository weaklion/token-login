import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios';

Vue.use(Vuex);

const SET_USER_DATA = "SET_USER_DATA";

export default new Vuex.Store({
  state: {
    user : null,
  },
  
  actions: {
    register({commit}, data) {
      return axios.post('//localhost:3000/register', data)
      .then(({ data }) => {
        console.log("fasfd",data);
        commit(SET_USER_DATA, data);
      })
    }
  },

  mutations: {
    [SET_USER_DATA] (state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common['Authorization'] ='bearer ' + userData.token;
      
    }
  },
  modules: {}
});
