import {createRouter, createWebHistory} from "vue-router";
import FavoriteProducts from "../products/components/favorite-products.component.vue";
import ProductsShop from "../products/components/products-shop.component.vue";
import ShopCar from "../products/components/shop-car.component.vue";
import PurchaseConfirmation from "../public/purchase-confirmation.component.vue";
import Toolbar from "../public/toolbar.component.vue";
import ViewProductCard from "../products/components/view-product-card.component.vue";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/favoriteProducts', component: FavoriteProducts},
        { path: '/toolbar', component: Toolbar},
        { path: '/productsShop', component: ProductsShop},
        { path: '/shopCar', name: 'shopCar', component: ShopCar, props: (route) => ({ items: route.params.items || [] }) },
        { path: '/purchaseConfirmation', component: PurchaseConfirmation},
        //{ path: '/viewProductCard/:id', name: 'viewProductCard', component: ViewProductCard, props:true}
    ]
});

export default router;