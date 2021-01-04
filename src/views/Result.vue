<style lang="scss"></style>

<template>
  <div>
    <h1>name : {{ name }}</h1>
    <p>token : {{ token }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: null,
      token: null
    };
  },

  created() {
    axios
      .get("//localhost:3000/result")
      .then(({ data }) => {
        console.log(data);
        this.name = data.name;
        this.token = data.token;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
