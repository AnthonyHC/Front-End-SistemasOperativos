import axios from 'axios';

export class CustomersApiService{
    getCustomers() {
        return axios.get("http://20.97.213.121:8080/data");
    }
}