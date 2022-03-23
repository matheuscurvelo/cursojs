const mod1  = require('./mod_1')
const axios = require('axios')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => (response.data))
    .catch(e => console.log(e))


console.log(mod1);