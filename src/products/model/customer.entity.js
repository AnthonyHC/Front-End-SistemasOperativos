export class Customer {
    constructor(id = '',
                nombre = '',
                email = '',
                telefono = '',
                apellido = '',
                contrasena = '') {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.apellido = apellido;
        this.contrasena = contrasena;
    }

    static fromApiResponse(apiData) {
        return new Customer(apiData.id,
            apiData.nombre,
            apiData.email,
            apiData.telefono,
            apiData.apellido,
            apiData.contrasena)
    }
}

