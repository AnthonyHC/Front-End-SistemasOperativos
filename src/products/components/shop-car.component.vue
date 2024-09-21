<script>
export default {
  name: "ShopCar",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalPrice() {
      // Usar shoppingCart para calcular el precio total
      return this.items.reduce((sum, item) => sum + item.product.precio * item.quantity, 0).toFixed(2);
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-if="items.length > 0">
      <h2>Carrito de Compras</h2>
      <table>
        <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items" :key="item.product.id">
          <td>{{ item.product.nombre }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ (item.product.precio * item.quantity).toFixed(2) }}</td>
        </tr>
        </tbody>
      </table>
      <div class="total-row">
        <span class="total-label">Total:</span>
        <span class="total-value">{{ totalPrice }}</span>
      </div>
    </div>
    <div v-else>
      <p>No hay productos en el carrito.</p>
    </div>
    <pv-button class="button-pay-container" @click="this.$router.push('/purchaseConfirmation')">Pagar</pv-button>
  </div>
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
