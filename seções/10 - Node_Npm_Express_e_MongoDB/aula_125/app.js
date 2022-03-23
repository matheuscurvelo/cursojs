const Animal = require('./mod_1')

const dog = new Animal('cachorro')

console.log(__dirname);
console.log(__filename);

const path = require('path')
console.log(path.resolve(__dirname, 'arquivos', 'imagens'));