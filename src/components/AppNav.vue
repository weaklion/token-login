<style lang="scss">
  #nav {
    display: flex;
  }
</style>

<template>
  <div id="nav">
    <router-link to="/" class="button">
      Home
    </router-link>

    <router-link v-if="loggedIn" to="/result" class="button">
      Result
    </router-link>

    <router-link v-if="!loggedIn" to="/login" class="button"> 
      Login 
    </router-link>

    <button v-else class="button" @click="logout"> 
      Logout
    </button>



  </div>
</template>

<script>

  import { mapGetters } from "vuex";

  export default {

    computed : {
      ...mapGetters([
        "loggedIn"
      ])
    },

    methods : {
      logout () {
        this.$store.dispatch('logout');
      }
    }


    
  }
</script>