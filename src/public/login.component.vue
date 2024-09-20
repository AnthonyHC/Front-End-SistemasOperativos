<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username && this.password) {
        alert(`Logging in with username: ${this.username}`);
      } else {
        alert("Please fill in both fields.")
      }
    }
  }
}
</script>

<template>
  <div class="containerLogin">
    <img src="../assets/logoBig.png" alt="Logo" class="logo"/>
    <div class="loginUsername">
      <h1>Username:</h1>
      <input class="textboxUsername" type="text" v-model="username" id="username" placeholder="Enter your username" maxlength="20" />
    </div>
    <div class="loginPassword">
      <h1>Password:</h1>
      <input class="textboxUsername" type="password" v-model="password" id="password" placeholder="Enter your password" maxlength="20" />
    </div>
    <pv-button class="buttonLogin" @click="login">
      Login
    </pv-button>
  </div>
</template>

<style scoped>
.containerLogin {
  margin: auto;
  background-color: beige;
  padding: 30px;
}
  .loginUsername {
    margin-left: 405px;
    text-align: left;
    font-weight: bolder;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 7px;
  }
  .loginPassword {
    margin-left: 405px;
    text-align: left;
    font-weight: bolder;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 7px;
  }
  .textboxUsername {
    width: 50%;
    height: 50px;
    font-size: 13px;
    border-radius: 15px;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    margin: auto;
  }
  .logo {
    width: 250px;
    height: auto;
  }
  .buttonLogin {
    margin-top: 20px;
    background-color: #f63fb0;
  }
</style>