import axios from 'axios';

export class ProductsApiService {
    getProducts() {
        return axios.get("http://localhost:3000/productos");
    }

    getProductById(id) {
        return axios.get(`http://localhost:3000/productos/${id}`);
    }
}