const frutas = ['abacaxi','banana','caqui','damasco','framboesa']

console.log('base: ', frutas);

//adiciona no final
console.log(frutas.push('maçã'), frutas);

//remove do final
console.log(frutas.pop(), frutas, '\n');

//adiciona no inicio
console.log(frutas.unshift('maçã'), frutas);

//adiciona no inicio
console.log(frutas.shift(), frutas, '\n');

//slice  - fatia um array

console.log('slice(-2): ',frutas.slice(-2));
console.log('slice(1,4): ',frutas.slice(1,4));
console.log('slice(2,-1): ',frutas.slice(2,-1));

//join - transforma array em string
const frutas_str = frutas.join(' ')
console.log('\n arr -> str = ',frutas_str);

//split - transforma string em array
const frutas_arr = frutas_str.split(' ')
console.log('\n str -> arr = ',frutas_arr);


