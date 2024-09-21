<script>
import {ProductsApiService} from "../services/products-api.service.js";
import ProductCard from "./product-card.component.vue";
import {Product} from "../model/product.entity.js";
import ViewProductCard from "./view-product-card.component.vue";
import ShopCar from "./shop-car.component.vue";

export default {
  name: "products-shop",
  components: {ShopCar, ViewProductCard, ProductCard},
  data() {
    return {
      products: [],
      selectedProduct: null,
      shoppingCart: [] // Carrito de compras
    }
  },
  methods: {
    handleProductSelected(product) {
      // Guardar el producto seleccionado
      this.selectedProduct = product;
    },
    addToCart(product) {
      // Buscar si el producto ya está en el carrito
      const existingProduct = this.shoppingCart.find(item => item.product.id === product.id);
      if (existingProduct) {
        // Si ya existe, incrementar la cantidad
        existingProduct.quantity++;
      } else {
        // Si no existe, agregarlo con cantidad 1
        this.shoppingCart.push({ product, quantity: 1 });
      }
    }
  },
  async mounted() {
    const apiProductsService = new ProductsApiService();
    try {
      const response = await apiProductsService.getProducts();
      this.products = response.data.map(productData => Product.fromApiResponse(productData));
      console.log(this.products);
    } catch {
      console.error('Error fetching books:', error);
    }
  }
}
</script>

<template>
  <h1>Descubre nuestros productos</h1>

  <!-- Mostrar ViewProductCard si hay un producto seleccionado -->
  <div class="selected-product-container">
    <ViewProductCard v-if="selectedProduct" :product="selectedProduct"
                     @closeView="selectedProduct = null" @addToCart="addToCart"/>
  </div>

  <div class="product-grid">
    <div v-for="product in products" :key="product.id">
      <product-card :product="product" @productSelected="handleProductSelected"></product-card>
    </div>
  </div>

  <!-- Mostrar solo cuando lo necesites, manteniéndolo en el DOM -->
  <ShopCar v-show="true" :items="shoppingCart"/>

</template>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columnas de igual tamaño */
  gap: 16px; /* Espacio entre productos */
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en pantallas medianas */
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: repeat(1, 1fr); /* 1 columna en pantallas pequeñas */
  }
}

.selected-product-container {
  margin: auto;
}
</style>