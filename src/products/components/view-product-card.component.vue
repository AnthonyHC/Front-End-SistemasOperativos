<script>

  export default {
    name: "ViProductCard",
  }
</script>

<template>
  <pv-card class="product">
    <template #header></template>
    <template #title></template>
    <template #content>
      <div class="productDetails">
        <img src="../../assets/logo.png" alt="product" class="productImage" />
        <div class="contentStyle">
          <h2>Nombre:</h2>
          <h2>Marca:</h2>
          <h2>Descripcion:</h2>
          <h2>Precio</h2>
          <div class="buttonContainer">
            <pv-button icon="pi pi-heart" severity="help" rounded aria-label="Favorite"
                       class="button-heart-container"></pv-button>
            <pv-button class="agregarCarro">
              Agregar al carrito
            </pv-button>
          </div>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.product {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Hace que el contenido ocupe toda la pantalla verticalmente */
  background-color: #333; /* Puedes ajustar este color según el diseño */
  padding: 20px;
}
.productDetails {
  display: flex;
  background-color: #fff; /* Fondo blanco para la tarjeta */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
}
.productImage {
  width: 300px; /* Ajusta el tamaño de la imagen según sea necesario */
  height: auto;
  margin-right: 20px; /* Espaciado entre la imagen y el texto */
}
.contentStyle {
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  font-size: 10px;
  font-weight: bolder;
}
.buttonContainer {
  display: flex;
  gap: 10px; /* Espaciado entre los botones */
  margin-top: 10px;
}
.agregarCarro {
  background-color: #f63fb0;
  color: white;
  font-weight: bold;
  border-radius: 10px;
}
.button-heart-container, .button-user-container {
  background-color: #f63fb0;
  border: black;
  margin-left: 10px; /* Espaciado entre los botones */
}
</style>