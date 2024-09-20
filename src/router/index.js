import {createRouter, createWebHistory} from "vue-router";
import FavoriteProducts from "../products/components/favorite-products.component.vue";
import ProductsShop from "../products/components/products-shop.component.vue";
import ShopCar from "../products/components/shop-car.component.vue";
import PurchaseConfirmation from "../public/purchase-confirmation.component.vue";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/favoriteProducts', component: FavoriteProducts},
        { path: '/productsShop', component: ProductsShop},
        { path: '/shopCar', component: ShopCar},
        { path: '/purchaseConfirmation', component: PurchaseConfirmation},
    ]
});

export default router;