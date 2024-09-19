<script>
//import logoImage from 'src/assets/logo.png';
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      //logo: logoImage,
    }
  }
}
</script>

<template>
  <div class="containerLogin">
    <div class="logo">
      <img :src="logo" alt="Logo" />
    </div>
    <div class="loginUsername">
      <h1>Username:</h1>
      <input class="textboxUsername" type="text" v-model="username" id="username" placeholder="Enter your username" maxlength="20" />
    </div>
    <div class="loginPassword">
      <h1>Password:</h1>
      <input class="textboxUsername" type="password" v-model="password" id="password" placeholder="Enter your password" maxlength="20" />
    </div>
  </div>
</template>

<style scoped>
.containerLogin {
  margin: auto;
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

  }
</style>