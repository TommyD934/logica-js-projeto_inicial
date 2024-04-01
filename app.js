alert("bem vindo ao jogo");

let numeroSecreto = Math.floor(Math.random() * 51);

let Tentativas= 6;


while (Tentativas > 0 ) {
    let numeroEscolhido = parseInt(prompt(`digite um numero de 0 a 50`));
    if (numeroSecreto == numeroEscolhido) {
        alert(`parabens voce acertou o numero ${numeroEscolhido}`);
        break;
    } else if (numeroEscolhido > numeroSecreto) {
        alert(`voce digitou um numero maior que o númeo secreto`);
    } else {
        alert(`voce digitou um numero  menor que o numero Secreto`);
    };
    alert(`você ainda tem  ${Tentativas} Tentativas `)
    Tentativas = Tentativas - 1;
}
    if (Tentativas === 4) {
        alert(`Suas tentativas acabaram`);
    }else {
        alert(`você ainda tem ${4 - Tentativas} tentativas`)
}
let palavraTentativa = Tentativas > 1 ? `Tentativas` : `Tentativas`
if (Tentativas < 4) {
    alert(`você descobriu o número secreto em ${Tentativas} ${palavraTentativa}`)

}

for(let Tentativas = 0; tentativas <6; Tentativas++){}