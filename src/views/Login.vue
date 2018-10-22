<template>
    <b-container class="login">
      <b-row  align-h="around" align-v="center">
        <b-col col lg="5" align-self="center">
    <b-card img-src="https://placekitten.com/1000/800"
            img-alt="Card image"
            img-bottom
            bg-variant="dark"
            text-variant="white">
      <p class="card-text">
        To see what's inside, log in with Google
      </p>
      <button @click="signIn" class="google-button"><img src="../assets/google-logo.svg" alt="google-logo" class="google-button__icon">Sign In with Google</button>
    </b-card>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
  export default {
    name: "login",
    methods: {
      signIn: function () {
        this.$store.dispatch('login')
          .then(() => this.$router.push('/'))
          .catch(() => this.errors = 'Login error')
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    padding: 100px;
  }

  .google-button {
    height: 40px;
      width: 200px;
    border-width: 0;
    background: white;
    color: #737373;
    border-radius: 5px;
    white-space: nowrap;
    box-shadow: 1px 1px 0px 1px rgba(0,0,0,0.05);
    transition-property: background-color, box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;
    padding: 0;

  &:focus,
  &:hover {
     box-shadow: 1px 4px 5px 1px rgba(0,0,0,0.1);
   }

  &:active {
     background-color: #e5e5e5;
     box-shadow: none;
     transition-duration: 10ms;
   }
  }

  .google-button__icon {
    display: inline-block;
    vertical-align: middle;
    margin: 8px;
    width: 18px;
    height: 18px;
    box-sizing: border-box;
  }
</style>