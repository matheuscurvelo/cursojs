function soma(a,b) {
    if ((typeof a !== 'number') || (typeof b !== 'number') ) {
        throw new Error('"a" e "b" precisam ser números')
    }

    return a + b
}

try {
    console.log(soma(5,6))
    console.log(soma(5,'6'))
} catch (erro) {
    console.error(erro.toString());
} finally {
    console.log('Executado sempre');
}