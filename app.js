function gerarNumeroAle(index){
    return Math.floor(Math.random() * index + 1);
}

let listaNumeros = [];

function joji () {
    let numeroDePosi = parseInt(prompt('Quantos númeos você quer aleatorizar'))
    let numeroDeTentativas = 3
    let numeroSecreto = gerarNumeroAle(numeroDePosi);

    for(let tentativas = 0; tentativas < numeroDeTentativas; tentativas++){
        listaNumeros[tentativas] = parseInt(prompt(`Digite um número de 1 a ${numeroDePosi}`));

        if(listaNumeros[tentativas] === numeroSecreto){
            alert('Parabéns, você acertou!');
            break;
        } else if(listaNumeros[tentativas] > numeroSecreto){
            alert('Você digitou um número maior que o número secreto');
        } else {
            alert('Você digitou um número menor que o número secreto');
        }
        if(tentativas === numeroDeTentativas){
            alert(`Suas tentativas acabaram`);
        } else if (tentativas <= numeroDeTentativas){
            alert(`você ainda tem  ${numeroDeTentativas - tentativas - 1} tentativas`);   
        }else{
            alert(`você ainda tem  ${numeroDePosi - tentativas - 1} tentativa`);
        }    
    }
    alert(`Os números que você chutou são: ${listaNumeros[0]}, ${listaNumeros[1]} e ${listaNumeros[2]}` )
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(tentativas < numeroDeTentativas){
        alert(`Você acertou com ${tentativas} ${palavraTentativa}`)
    }
} 

function clicou() {
    joji();
}