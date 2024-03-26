
alert("bem vindo ao jogo");

let numeroSecreto = Math.floor(Math.random() * 51);

let numeroTentativas = 0;


while (numeroTentativas <= 5) {
    let numeroEscolhido = parseInt(prompt(`digite um numero de 0 a 50`));
    if (numeroSecreto == numeroEscolhido) {
        alert(`parabens voce acertou o numero ${numeroEscolhido}`);
        break;
    } else if (numeroEscolhido > numeroSecreto) {
        alert(`voce digitou ${numeroEscolhido} é maior que o númeo secreto`);
    } else {
        alert(`voce digitou ${numeroEscolhido} é menor que o numero Secreto`);
    };
    numeroTentativas = numeroTentativas + 1;
}