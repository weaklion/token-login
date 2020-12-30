import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios';

Vue.use(Vuex);

const SET_USER_DATA = "SET_USER_DATA";
const LOG_OUT       = "LOG_OUT";

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
    },

    login({commit}, data) {
      return axios.post('//localhost:3000/login', data)
      .then(({ data })=> {
        commit(SET_USER_DATA, data);
      })
    },

    logout({ commit }) {
      commit(LOG_OUT);
    }
  },

  mutations: {
    [SET_USER_DATA] (state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common['Authorization'] ='bearer ' + userData.token;
    },

    [LOG_OUT] () {
      localStorage.removeItem('user');
      location.reload();
    }
  },

  getters : {
    loggedIn(state) {
      return !!state.user
    }
  },
  modules: {}
});
