import axios from 'axios';

export class CustomersApiService{
    getCustomers() {
        return axios.get("http://localhost:3000/clientes");
    }
}