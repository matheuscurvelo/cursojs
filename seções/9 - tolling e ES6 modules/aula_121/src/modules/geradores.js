const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)

const geraMaiuscula = () => String.fromCharCode(rand(65,91))
const geraMinuscula = () => String.fromCharCode(rand(97,123))
const geraNumero = () => String.fromCharCode(rand(48,58))
const geraSimbolo = () => {
    let min = [33,58,91,123]
    let max = [48,65,97,127]

    let random = Math.floor(Math.random() * min.length)

    return String.fromCharCode(rand(min[random],max[random]))
}

export default function geraSenha(qtd, mai, min, num, sim) {
    const senhaArray = []
    qtd = Number(qtd)

    for (let i = 0; i < qtd; i++) {
        mai && senhaArray.push(geraMaiuscula())
        min && senhaArray.push(geraMinuscula())
        num && senhaArray.push(geraNumero())
        sim && senhaArray.push(geraSimbolo())
    }

    return senhaArray.join('').substring(0,qtd);
}

