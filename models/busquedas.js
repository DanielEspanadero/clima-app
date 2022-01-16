const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        //TODO: Leer DB si existe.
    };

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
                'limit': 5,
                'language': 'es'
        }
    };

    async ciudad(lugar = '') {

        try {
            // Petición HTTP
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            console.log(resp.data);

            return []; //Retornar los lugares que coincidan con el lugar que escribió la persona.

        } catch (error) {
            return [];
        }
    }

}


module.exports = Busquedas;