
let filme = prompt("Escolha um gênero: ")
let valorDoIngresso = Number(prompt("Qual o valor do ingresso?"))
let lanchinho = prompt("O que você quer comer? ")
filme = filme.toUpperCase ()
if ((filme = "fantasia") && (valorDoIngresso <= 15)){
    alert("Bom filme! Aproveite seu " + lanchinho)
}else {
    alert("Escolha outro filme: ")
}