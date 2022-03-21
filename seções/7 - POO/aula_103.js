class Carro{
    constructor(name){
        this.name = name
        this[_velocidade] = 0
    }

    get velocidade(){
        return this[_velocidade]
    }

    set velocidade(velocidade){
        this[_velocidade] = velocidade
    }

    acelerar(){
        if (this[_velocidade] >= 200) return
        this[_velocidade]++
    }

    freiar(){
        if (this[_velocidade] < 0) return
        this[_velocidade]--
    }
}

const _velocidade = Symbol('velocidade')
const c = new Carro('Nissan')

for (let index = 0; index < 500; index++) {
    c.acelerar()
}

console.log(c);