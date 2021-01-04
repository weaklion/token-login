<style lang="scss"></style>

<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">
        Email:
      </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password">
        Password:
      </label>
      <input v-model="password" type="password" name="password" value />

      <p>{{ error }}</p>

      <button type="submit" name="button">
        Login
      </button>

      <router-link to="/register">
        You don't have an account ? please Sign on
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: null,
      error: null
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "Result" });
        })
        .catch(error => {
          this.error = error.response.data.error;
        });
    }
  }
};
</script>
