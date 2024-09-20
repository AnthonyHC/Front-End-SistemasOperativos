<script>

export default {
  name: "favorite-product-card",
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
      <img src="../../assets/blush-rare-beauty.jpeg" alt="product" class="img-product-container" />
      <p class="name-product-container">Nombre</p>
      <p class="brand-product-container">Marca</p>
      <p class="cost-product-container">Precio</p>
    </template>
    <template #footer>
      <div class="call-to-action-container">
        <pv-button class="button-details-container" severity="primary">Detalle</pv-button>
        <pv-button icon="pi pi-heart" severity="help" rounded aria-label="Favorite"
                   class="button-heart-container custom-heart-icon"
                    style="--icon-color: #f63fb0;"></pv-button>
        <pv-button icon="pi pi-shopping-cart" severity="success" rounded aria-label="Cart"
                   class="button-cart-container"></pv-button>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.product-card-container {
  width: 300px;
  background-color: #f1f1f1;
  padding: 0;
  border-radius: 25px;
}

.img-product-container {
  border-radius: 25px;
}

 .button-cart-container, .button-details-container{
  background-color: white;
  border: black;
  margin-left: 10px; /* Espaciado entre los botones */
  color: #f63fb0;
}
.button-heart-container {
  background-color: #f63fb0;
  border: black;
  margin-left: 10px; /* Espaciado entre los botones */
  color: white;
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