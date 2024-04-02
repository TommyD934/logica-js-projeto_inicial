
function iniciar() {
    alert("bem vindo ao jogo");
    let numerodealeatorizar = parseInt(prompt('quamtos numeros você quer aleatorizar'))

    function numeroAnf(index) {
        return Math.floor(Math.random() * index + 1);

    }
    let numeroescoooo = numeroAnf(numerodealeatorizar)

    for (let Tentativas = 0; Tentativas < numerodetentativas;  Tentativas++) {

        let numeroEscolhido = parseInt(prompt(`digite um numero de 1 a ${numerodealeatorizar}`));

        if (numeroescoooo === numeroEscolhido){
            
            alert(`parabens voce acertou o numero ${numeroEscolhido}`);
            break;
        } else if (numeroEscolhido > numeroescoooo) {
            alert(`voce digitou um maior que o númeo secreto`);
        } else {
            alert(`voce digitou um menor que o numero Secreto`);
        };
        alert(`você ainda tem  ${Tentativas} Tentativas `)
    }
    if (Tentativas === numerodetentativas) {
        alert(`Suas tentativas acabaram`);
         
    } else if (Tentativas <= numerodetentativas) {

        alert(`você ainda tem ${numerodetentativas - Tentativas - 1 } tentativas`);

    } else {

        (`você ainda tem ${numerodetentativas - Tentativas - 1 } Tentativas`);
        let numerodetentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        if(tentativas < 4){
            alert(`Você acertou com ${Tentativas} ${numerodetentativas}`)
    }
  }
}