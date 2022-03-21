//filter -> retorna sempre um array novo, sem alterar o original, com a mesma qtde de elementos ou menos
//retorna true quando quisesse adicionar aquele valor no array

const numeros = [4,5,51,7,87,9,8,1,3,6,4,2,89,45,36,78,15]

console.log(numeros.filter( valor => valor > 10));

const pessoas = [
    {nome: 'Matheus', idade: 25},
    {nome: 'Gil', idade: 24},
    {nome: 'Renan', idade: 23},
    {nome: 'Nicolle', idade: 22},
]

console.log(pessoas.filter(obj => obj.idade >= 25));