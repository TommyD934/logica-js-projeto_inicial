function media(){ let nota1 = parseFloat(prompt("digite a primeira nota").value);
    let nota2 = parseFloat(prompt("digite a segunda nota").value);

    let media = (nota1 + nota2)/2 ;

    if(media >= 15)
     if(media==25)
      alert("Uau! Aprovado");
     else
      alert(`Parabens, aprovado! Media ${media}`);
    else
     alert("Reprovado!")
}
   