<script>
import Toolbar from "./toolbar.component.vue";
import {CustomersApiService} from "../products/services/customers-api.service.js";
import {Customer} from "../products/model/customer.entity.js";
export default {
  name: "login",
  components: {Toolbar},
  data() {
    return {
      username: "",
      password: "",
      loggedIn: false, // Nueva variable para controlar el estado de login,
      customers: []
    };
  },
  methods: {
    login() {
      // Validar si el email y la contraseña son correctos
      const customer = this.customers.find(customer =>
          customer.email === this.username && customer.contrasena === this.password
      );

      if (customer) {
        this.loggedIn = true; // Actualiza el estado a loggedIn
        alert(`Logging in with username: ${this.username}`);
      } else {
        alert("Invalid email or password.");
      }
    }
  },
  async mounted() {
    const apiCustomersService = new CustomersApiService();
    try {
      const response = await apiCustomersService.getCustomers();
      this.customers = response.data.map(customerData => Customer.fromApiResponse(customerData));
      console.log(this.customers);
    } catch {
      console.error('Error fetching books:', error);
    }
  }
}
</script>

<template>
  <div class="containerLogin">
    <img v-if="!loggedIn" src="../assets/logoBig.png" alt="Logo" class="logo"/>
    <div v-if="!loggedIn">
      <div class="loginUsername">
        <h1>Email:</h1>
        <input class="textboxUsername" type="text" v-model="username" id="username" placeholder="Enter your username"/>
      </div>
      <div class="loginPassword">
        <h1>Password:</h1>
        <input class="textboxUsername" type="password" v-model="password" id="password" placeholder="Enter your password"/>
      </div>
      <pv-button class="buttonLogin" @click="login">
        Login
      </pv-button>
    </div>

    <toolbar v-if="loggedIn"></toolbar>
  </div>
</template>

<style scoped>
.containerLogin {
  margin: auto;
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