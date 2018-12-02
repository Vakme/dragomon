<template>
        <div class="login">
            <div class="login-bg">
            </div>
            <div class="content">

                <div class="first">
                    <img src="https://placekitten.com/160/160" alt="">
                </div>
                <div class="second">
                    <p class="card-text">
                        To see what's inside, log in with Google
                    </p>
                    <button @click="signIn" class="google-button"><img src="../assets/google-logo.svg" alt="google-logo" class="google-button__icon">Sign In with Google</button>
                </div>
            </div>
        </div>
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
    html, body {
        padding: 0;
        margin: 0;
    }

    .login {
        position: relative;
        top: 0;
        left: 0;
        width:100vw;
        height: 100vh;
        overflow: hidden;
        background-color: #2D2E34;
        text-align: center;
    }
    .login-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;

        background: linear-gradient(110deg, #f2e288 40%, rgba(0, 0, 0, 0) 40%), linear-gradient(140deg, #e27028 70%, #eab259 70%);
        transform: skewY(-4deg);
        transform-origin: top left;
        -webkit-box-shadow: 0px 0px 32px 3px rgba(25,26,32,1);
        -moz-box-shadow: 0px 0px 32px 3px rgba(25,26,32,1);
        box-shadow: 0px 0px 32px 3px rgba(25,26,32,1);
    }

    .content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;

        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .first, .second {
        padding: 50px;
        font-family: Open Sans, sans-serif;
    }
    .first {
        color: #2D2E34;
    }

    .second {
        color: #fff;
    }

    @media (min-width: 768px) and (orientation: portrait), (min-width: 576px) {
        .login-bg {
            width: 50%;
            height: 100%;
            transform: skewX(-6deg);
        }
        .content {
            flex-direction: row;
        }
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