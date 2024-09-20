import {createRouter, createWebHistory} from "vue-router";
import FavoriteProducts from "../products/components/favorite-products.component.vue";
import ProductsShop from "../products/components/products-shop.component.vue";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/favoriteProducts', component: FavoriteProducts},
        { path: '/productsShop', component: ProductsShop}
    ]
});

export default router;