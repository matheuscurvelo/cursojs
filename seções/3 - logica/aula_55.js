const frutas = ['pera','maça','uva']
const pessoa = {nome: 'Matheus', sobrenome: 'Moraes', idade: 25}

for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    console.log(element);
}

//le os indices/chaves
for (let i in frutas) {
    console.log(i);
}

console.log('--------------------');

for (let k in pessoa) {
    console.log(k, pessoa[k]);
}