<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Toolbar from "./public/toolbar.component.vue";
import Login from './products/components/login.component.vue';
import ProductCard from './products/components/product-card.component.vue';
import FavoriteProductCard from "./products/components/favorite-product-card.component.vue";
</script>

<template>
  <toolbar></toolbar>
  <h2>Soy Eli</h2>
  <login></login>
  <product-card></product-card>
  <favorite-product-card></favorite-product-card>
</template>

<style scoped>

</style>
