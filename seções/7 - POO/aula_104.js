class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if (this.ligado){
            console.log(`${this.name} já está ligado`);
        } else {
            this.ligado = true
        }
    }

    desligar(){
        if (!this.ligado){
            console.log(`${this.name} já está desligado`);
        } else {
            this.ligado = false
        }
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome,cor,modelo) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }

    //sobrescreve
    ligar() {
        console.log('tentando ligar')
    }


}

const d1 = new Smartphone('Xiaomi','Preto', 'A3')
d1.ligar()
console.log(d1);