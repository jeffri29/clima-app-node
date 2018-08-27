
const argv = require('yargs')
    .options({
        direccion:{
            alias: 'd',
            demand: true,
            desc: 'Dirección de la ciudad para optener el clima'
        }
    })
    .help()
    .argv

module.exports = {
    argv
}