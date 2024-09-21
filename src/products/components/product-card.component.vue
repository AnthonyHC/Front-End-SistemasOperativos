<script>
import {Product} from "../model/product.entity.js";

export default {
  name: "product-card",
  props: {product: Product},
  methods: {
    selectProduct() {
      // Emitir un evento al padre con los datos del producto
      this.$emit("productSelected", this.product);
    }
  }
}
</script>

<template>
  <pv-card class="product-card-container">
    <template #header>
    </template>
    <template #title>
    </template>
    <template #subtitle>
    </template>
    <template #content>
      <img :alt="product.name" :src="product.imagen" class="img-product-container"
           width="200px" height="200px"/>
      <p class="name-product-container">{{product.nombre}}</p>
      <p class="brand-product-container">{{product.marca}}</p>
      <p class="cost-product-container">S/ {{product.precio}}</p>
    </template>
    <template #footer>
      <div class="call-to-action-container">
        <pv-button class="button-details-container" severity="primary"
                   @click="selectProduct">Detalle</pv-button>
        <pv-button icon="pi pi-heart" severity="help" rounded aria-label="Favorite"
                   class="button-heart-container"></pv-button>
        <pv-button icon="pi pi-shopping-cart" severity="success" rounded aria-label="Cart"
                   class="button-cart-container"></pv-button>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.product-card-container {
  width: 300px;
  height: 460px;
  background-color: #f1f1f1;
  padding: 0;
  border-radius: 25px;
}

.img-product-container {
  //border-radius: 25px;
}

.button-heart-container, .button-cart-container, .button-details-container{
  background-color: white;
  border: black;
  margin-left: 10px; /* Espaciado entre los botones */
  color: #f63fb0;
}

.cost-product-container {
  font-weight: bolder;
}

.name-product-container {
  font-weight: bold;
}

.brand-product-container {
  font-size: 15px;
}
</style>