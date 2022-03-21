//map -> retorna sempre um array novo, sem alterar o original, usa o valor do array original para criar um novo array
//retorna o valor

const numeros = [4,5,51,7,87,9,8,1,3,6,4,2,89,45,36,78,15]

console.log(numeros.map( valor => valor * 2 ));

const pessoas = [
    {nome: 'Matheus', idade: 25},
    {nome: 'Gil', idade: 24},
    {nome: 'Renan', idade: 23},
    {nome: 'Nicolle', idade: 22},
]

//quando se usa objetos acaba alterando o objeto original
console.log(pessoas.map((obj,indice) => {
    const newObj = {...obj}
    newObj.id = indice + 1
    return newObj
} ));