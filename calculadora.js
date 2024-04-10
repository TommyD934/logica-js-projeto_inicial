
function soma (gd, hj){

let soma = gd + hj;
alert(`seu númro é ${gd} e ${hj}`)
alert(`o valor é ${soma}`);
}

let numeroDigitado = parseFloat(prompt(`Digite um número para fazer a conta`))
let numeroAbc = parseFloat(prompt(`Digite um número paea calcular com o primeiro númro escolhidos`))

soma(numeroDigitado, numeroAbc);