export class Product {
    constructor(id = '',
                marca = '',
                categoria = '',
                nombre = '',
                descripcion = '',
                precio = '',
                imagen = '') {
        this.id = id;
        this.marca = marca;
        this.categoria = categoria;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }

    static fromApiResponse(apiData) {
        return new Product(apiData.id,
            apiData.marca,
            apiData.categoria,
            apiData.nombre,
            apiData.descripcion,
            apiData.precio,
            apiData.imagen);
    }
}
