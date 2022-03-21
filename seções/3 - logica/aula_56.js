const frutas = ['pera','maça','uva']
const pessoa = {nome: 'Matheus', sobrenome: 'Moraes', idade: 25}

for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    console.log(element);
}

//in - para chaves/indices
for (let i in frutas) {
    console.log(i, frutas[i]);
}

//of - para valores
for (let valor of frutas) {
    console.log(valor);
}