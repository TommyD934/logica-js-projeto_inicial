const numerosEsvolhidos = [10, 15, 35, 522, 37, 77];
let soma = 0;
for (let i = 0; i <= numerosEsvolhidos.length; i++) if (numerosEsvolhidos[i] % 2 == 0) soma += numerosEsvolhidos[i];
console.log("soma:", soma);