<style lang="scss">

</style>

<template>
  <div>
    <h1> name : {{name}}</h1>
  </div>
</template>

<script>

  import axios from "axios";

  export default {

    data() {
      return {
        isLoading : true,
        name  : null
      };
    },

    created(){
      axios.get("//localhost:3000/result").then(({data}) => {
  
        console.log(data);
        this.name = data.name;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
      })
    },
    
  }
</script>