
const axios = require('axios');


const getClima = async (lat, lng)=>{

    let clima = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ed09bf222915ce2e5100dc9f04094295`);

    return clima.data.main.temp;
}



module.exports = {
    getClima
}