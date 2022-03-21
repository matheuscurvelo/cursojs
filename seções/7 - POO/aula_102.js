//Classe
class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

//função construtora
function Pessoa2(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`);
}

const p1 = new Pessoa('Marco','Aurélio')
const p2 = new Pessoa2('João','Aurélio')

// A diferença é que no proto construtor de Pessoa é a classe e o de Pessoa2 é a funcao Pessoa2