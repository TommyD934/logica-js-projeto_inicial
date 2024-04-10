

function gerartabela(){
    
}

let numnerodeColuna =parseInt(prompt('digite o numero de coluna'))
let numnerodelinha =parseInt(prompt('digite o numero de coluna'))

let tabeladeEntrada = [
    [],
    [],
    []
]
function gerarNumeroAleatorio(max){
    for (let yt = 0; yt < max.length; yt++) {
        for (let gh = 0; gh < max[yt].length; gh++) {
            max[yt][gh] = geraNumeroAle(100)
        }
    } 
    return max;
}
function geraNumeroAle(index){
    return Math.floor(Math.random() * index + 1);
}
console.table(gerarNumeroAleatorio(tabeladeEntrada));



function somaArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

let lista = [1, 4, 7, 2, 3, 15];
let soma = somaArray(lista);
alert(soma);

function maiorNumeroArray(arr) {
    let maior = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}

alert(maiorNumeroArray(lista));

function mostrarInveso(arr) {
    let arrInversa = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arrInversa.push(arr[i]);
    }
    return arrInversa;
}

alert(mostrarInveso(lista))

var arroi = ['foo', 'bar', 'foo'];
var novaArr = arroi.filter((este, i) => arroi.indexOf(este) === i);
console.log(novaArr); 