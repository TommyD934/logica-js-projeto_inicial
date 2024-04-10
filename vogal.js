let digitealetra = prompt("Insira uma letra")

let letrasVogais = ["a", "e", "i", "o", "u"]

if (letrasVogais.indexOf(digitealetra.toLowerCase()) !== -1) {
  alert("sua letra é uma Vogal")
} else {
  alert("sua letra é uma Consoante")
}