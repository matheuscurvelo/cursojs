const frutas = ['abacaxi','banana','caqui','damasco','framboesa']
console.log('base: ',frutas);

// splice (index_init, qtde_del , add1, add2)

console.log('removidos: ',frutas.splice(4,1,'maçã'));
console.log(frutas);