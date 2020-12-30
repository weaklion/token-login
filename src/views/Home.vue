<style lang="scss">

</style>

<template>
  <div class="home">
    <h1>hello world!!@@##</h1>

    <div v-if="!loggedIn">
      <router-link to="/login">
        Login
      </router-link>
      or
      <router-link to="/register">
        Register
      </router-link>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from "vuex";

  export default {

    computed : {

      ...mapGetters([
        "loggedIn"
      ])

    }

  }
</script>