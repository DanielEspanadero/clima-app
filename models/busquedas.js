const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor(){
        //TODO: Leer DB si existe.
    };

    async ciudad( lugar = '' ){

        // Petición HTTP
        // console.log('Ciudad', lugar);
        console.clear()

        const resp = await axios.get('https://reqres.in/api/users?page=2');
        console.log(resp.data.per_page);

        return []; //Retornar los lugares que coincidan con el lugar que escribió la persona.

    }

}



module.exports = Busquedas;