<script>
export default {
  name: "purchase-confirmation"
}
</script>

<template>
  <div class="confirmation-container">
    <div class="confirmation-card">
      <pv-icon class="confirmation-icon" icon="pi pi-check-circle" size="4x"></pv-icon>
      <h1 class="confirmation-title">¡Compra realizada con éxito!</h1>
      <p class="confirmation-message">Gracias por tu compra. Te enviaremos un correo con los detalles.</p>
      <pv-button severity="success" class="return-button">
        Volver a la tienda
      </pv-button>
    </div>
  </div>
</template>

<style scoped>
.confirmation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.confirmation-card {
  text-align: center;
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.confirmation-icon {
  color: #28a745; /* Color verde para el check de éxito */
}

.confirmation-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-top: 1rem;
}

.confirmation-message {
  font-size: 1.2rem;
  color: #666;
  margin: 1.5rem 0;
}

.return-button {
  background-color: #f63fb0;
  color: white;
  border-radius: 25px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.return-button:hover {
  background-color: #218838;
}
</style>