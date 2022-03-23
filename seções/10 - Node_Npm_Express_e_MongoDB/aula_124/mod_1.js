const nome = 'Matheus'
const sobrenome = 'Moraes'
const val1 = 10
const val2 = 20
const media = val1 + val2

const falaNome = () => {
    console.log(nome, sobrenome);
}

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}


// formas de exportar variaveis no node:

module.exports.nome = nome
exports.sobrenome = sobrenome
this.falaNome = falaNome

exports.Pessoa = Pessoa

//sobrescreve o exports
module.exports = {
    val1, val2, media
}