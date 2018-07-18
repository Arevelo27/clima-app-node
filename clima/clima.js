const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=73959f2bc2c1ec94d99834d3711fb962`)

    // if (resp.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No hay resultados para la ciudad ${direccion}`);
    // }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}