class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume() {
        this.volume++
    }

    diminuirVolume() {
        this.volume--
    }

    static trocaPilha() {
        console.log('Pilha trocada');
    }
}

const c1 = new ControleRemoto('Samsumng')
c1.aumentarVolume()
ControleRemoto.trocaPilha()
console.log(c1);