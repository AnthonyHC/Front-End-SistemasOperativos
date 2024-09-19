<script>


export default {
  name: "toolbar",
}
</script>

<template>
  <pv-toolbar class="toolbar-container" style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
    <template #start>
      <img src="../../assets/logo.png" alt="Logo" class="logo" />
      <p class="title-container">Solaris</p>
    </template>
    <template #center>

    </template>
    <template #end>
      <pv-button icon="pi pi-heart" severity="help" rounded aria-label="Favorite"
                 class="button-heart-container"></pv-button>
      <pv-button icon="pi pi-user" severity="info" rounded aria-label="User"
                 class="button-user-container"></pv-button>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.title-container {
  color: #f63fb0;
  font-family: "Inter", cursive;
  font-weight: bolder;
  font-size: 30px;
  margin-left: 15px; /* Espaciado entre el logo y el título */
}

.button-heart-container, .button-user-container {
  background-color: #f63fb0;
  border: black;
  margin-left: 10px; /* Espaciado entre los botones */
}

.toolbar-container {
  width: 100%; /* Asegúrate de que ocupe todo el ancho del viewport */
  display: flex; /* Flexbox para distribuir los elementos correctamente */
  justify-content: space-between; /* Distribuye el contenido a los lados */
  align-items: center; /* Centra verticalmente el contenido */
  background-color: #f1f1f1; /* Color de fondo para la barra */
  padding: 0 10px; /* Espaciado interno */
  box-sizing: border-box; /* Incluir padding en el cálculo del ancho total */
}

.spacer {
  flex: 1 1 auto;
}

.logo {
  max-width: 100px;
  height: auto;
  margin-right: 15px; /* Espaciado entre el logo y el título */
}
</style>