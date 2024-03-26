alert("bem vindo ao jogo");

let numeroSecreto = 3;
numeroEscolhido = parseInt( prompt("digite um numero de 1 a 50"))

if (numeroSecreto == numeroEscolhido){
    alert("parabens voce acertou")
} else if(numeroEscolhido > numeroSecreto){
    alert("numero maior que o numero Escolhido")
}else{
    alert("Esse numero é menor que o numero Secreto")
};