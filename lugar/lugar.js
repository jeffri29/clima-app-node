
const axios = require('axios');


const getLugarLatLng = async (direccion) => {
    // Escapar los espacios, para hacer una url amigable
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${direccion}.`)
    }

    let localizacion = resp.data.results[0];
    let coordenadas = localizacion.geometry.location;

    return {
        direccion: localizacion.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}

module.exports = {
    getLugarLatLng
}