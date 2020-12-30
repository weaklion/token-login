<style lang="scss">
  
</style>


<template>
  <div id="app">
    <app-nav/>
    <router-view class="page"/>
  </div>
</template>

<script>

  import AppNav from "./components/AppNav";

  export default {
    

    components : {
      AppNav
    }
  }
</script>
