//reduce -> reduz o array a um unico elemento
//retorna o valor

const numeros = [4,5,51,7,87,9,8,1,3,6,4,2,89,45,36,78,15]

console.log(numeros.reduce( (acumulador, valor) => {
    if (valor % 2 === 0) {
        acumulador.push(valor)
    }
    return acumulador
} ,  []));

const pessoas = [
    {nome: 'Matheus', idade: 25},
    {nome: 'Gil', idade: 24},
    {nome: 'Renan', idade: 23},
    {nome: 'Nicolle', idade: 22},
]

console.log(pessoas.reduce((acumulador,obj) => {
    if (acumulador.idade < obj.idade) {
        return acumulador
    }
    return obj
} ));

//alterar os elementos do array original - map
//filtrar o array - filter
//reduzir a um elemento - reduce