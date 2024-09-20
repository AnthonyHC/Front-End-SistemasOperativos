
<script>

export default {
  name: "ShopCar",
  data() {
    return {
      items: [
        { product: 'Juan', cant: 30, price: 11.50 },
        { product: 'Ana', cant: 25, price: 5.50 },
        { product: 'Carlos', cant: 40, price: 8.70 },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.items.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    }
  }
}
</script>

<template>
  <div class="container">
    <pv-table :value="items" class="elevation-1">
      <pv-column field="product" header="Producto">
        <template #body="{ data }">
          <div class="product-cell">
            <img src="../../assets/logo.png" alt="Imagen" class="product-image" />
            {{ data.product }}
          </div>
        </template>
      </pv-column>
      <pv-column field="cant" header="Cantidad"></pv-column>
      <pv-column field="price" header="Precio"></pv-column>
    </pv-table>
    <div class="total-row">
      <span class="total-label">Total:</span>
      <span class="total-value">{{ totalPrice }}</span>
    </div>
  </div>
  <pv-button class="button-pay-container" @click="$router.push('/purchaseConfirmation')">Pagar</pv-button>
</template>


<style scoped>
.container {
  margin: 0 auto;
  padding: 16px;
  max-width: 1200px;
}
.elevation-1 {
  margin-top: 20px;
}
.product-cell {
  display: flex;
  align-items: center;
}
.product-image {
  width: 60px; /* Ajusta el tamaño de la imagen */
  height: auto; /* Ajusta el tamaño de la imagen */
  margin-right: 10px; /* Espacio entre la imagen y el texto */
}
.total-row {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.total-label {
  font-weight: bolder;
  margin-right: 10px;
}
.total-value {
  font-weight: bolder;
}
.button-pay-container {
  background-color: #f63fb0;
  border: none;
}
</style>
