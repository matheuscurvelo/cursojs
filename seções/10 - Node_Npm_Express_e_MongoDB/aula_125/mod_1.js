// module.exports = 10
// module.exports = (x,y) => x*y
module.exports = class Animal {
    constructor(nome) {
        this.nome = nome
        console.log(`eu sou um ${this.nome}`);
    }
}
