
const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


//console.log(yargs.direccion)

getInfo = async (direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima de ${coors.direccion} es de ${temp} grados`;
    } catch (e) {
        return `No se puede determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion).then(resp => {
    console.log(resp)
}).catch(err => {
    console.log(err)
})