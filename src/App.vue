<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Toolbar from "./products/components/toolbar.component.vue";
import Login from './products/components/login.component.vue';
import ViProductCard from "./products/components/view-product-card.component.vue";
import ShopCar from "./products/components/shop-car.component.vue";
</script>

<template>
  <toolbar></toolbar>
  <h2>Soy Eli</h2>
  <login></login>
  <vi-product-card></vi-product-card>
  <shop-car></shop-car>
</template>

<style scoped>

</style>
