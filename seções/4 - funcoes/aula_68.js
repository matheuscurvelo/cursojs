//declaracao de funcao (function hoisting - a funcao é elevada para as primeiras linhas) 
function oi() {
    console.log('oi');
}

// anonima
const oi2 = function () {
    console.log('oi2');
}

// arrow function
const oi3 = () => {
    console.log('oi3');
}

//dentro de um objeto
const obj = {
    oi4(){
        console.log('oi4');
    }
}

oi()
oi2()
oi3()
obj.oi4()