
function começar() {
   
alert("bom dia, bem vindo ao jogo")
 
let numeroDePosições = parseInt(prompt(`quantos numeros você quer aleatorizar`))

function numeroAleatorio(index){
 
   return Math.floor(Math.random() *index + 1)
 
}
 
let numeroSecreto = numeroAleatorio(numeroDePosições)
 
for(let numeroTentativas = 0; numeroTentativas < 5; numeroTentativas++){
 
    let numeroEscolhido = parseInt(prompt(`digite um numero de 1 a ${numeroDePosições}`));
 
    if(numeroSecreto == numeroEscolhido){
            alert(`parabéns você acertou o numero ${numeroSecreto} `)
            break
        }else if(numeroEscolhido > numeroSecreto) {
 
            alert(`voce digitou ${numeroEscolhido} que é um numero maior que o numero secreto`)
        }else{
            alert(`voce digitou ${numeroEscolhido} que é um numero menor que o numero secreto`)
        }
        if (numeroTentativas === 3){
            alert(`suas tentativas acabaram`)
            break
        }else if (numeroTentativas < 4) {
            alert(`voce ainda tem ${2 - numeroTentativas} tentativas `)
        }else{
            alert(`voce ainda tem ${2 - numeroTentativas} tentativas`)
        }
}
 
}

var anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(anos[0]);
