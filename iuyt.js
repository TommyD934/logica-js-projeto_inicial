//crie um programa que leia uma Array com numero de posições com escolhidas pelo usuario. Atribuições pelo usuário de números inteiros. Ordene os números no Array e apresente eles na ordem correta.


let hgf = [];
let hoDeLista = parseInt(prompt("Qual o tamanho da sua lista?"));


function geraLista(hgf, hoDeLista) {
    for(let ilu = 0; ilu < hoDeLista; ilu++){
        hgf[ilu] = Math.floor(Math.random() * 100);
    }
    return hgf;
}


function ordenaLista(hgf){
    let listaOrdenada = hgf.sort(
        function compareNumbers(a, b) {
        return a - b;
      }
    );
    return listaOrdenada;
}

hgf = geraLista(hgf,hoDeLista);
let listaOrdenada = ordenaLista(hgf);

alert(hgf);
alert(listaOrdenada.join(", "));