class ValidaCpf {
    constructor(cpf) {
        this.cpfLimpo = cpf.replace(/\D+/g,'')
    }

    éSequência() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2)
        const digito1 = this.geraDigito(cpfSemDigitos)
    }

    valida() {

        if ((!this.cpfLimpo)
        ||  (typeof this.cpfLimpo !== 'string')
        ||  (this.éSequência() !== 'string')
        ||  (this.geraNovoCpf() !== 'string')
        ||  (this.cpfLimpo.length !== 11)){
            return false   
        }
        return 'Cheguei aqui'      
    }


}

const validaCpf = new ValidaCpf('070.987.720-03')
console.log(validaCpf.valida());