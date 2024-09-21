import axios from 'axios';

export class ProductsApiService {
    getProducts() {
        //return axios.get("http://localhost:3000/productos");
        return axios.get("http://20.97.213.121:8080/data");
    }

    getProductById(id) {
        return axios.get(`http://localhost:3000/productos/${id}`);
    }
}