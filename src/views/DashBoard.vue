<style lang="scss">

</style>

<template>
  <div>
    <h1> dashBoard</h1>
  </div>
</template>

<script>

  import axios from "axios";

  export default {

    data() {
      return {
        isLoading : true,
        events : [],
      };
    },

    created(){
      axios.get("//localhost:3000/dashboard").then(({data}) => {
        console.log(data);
        this.events = data.events.events;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
      })
    },
    
  }
</script>