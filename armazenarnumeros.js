
let listaNumerosdigitados = [];
                          
for (let i = 0; i < 10; i++) {             
  listaNumerosdigitados.push(prompt('armazene sua sequencia de numeros ' + (i+1))); 
}

alert('seus são seus numeros:' + listaNumerosdigitados.join('- '));