// recebeu as variáveis
let nome = prompt("digite seu nome: ")
let idade = prompt("digite seu idade: ")
// MENSAGEM: Digite as horas que você trabalha por dia:
let horasTrabalho = prompt("Digite as horas que você trabalha por dia: ")
let salarioDia = prompt("Digite o seu salário diário: ")
// Verificando as variaveis
console.log(typeof nome)
console.log(typeof horasTrabalho)
console.log(typeof salarioDia)
//Convertendo o que é necessário
let horasTrabNumber = Number(horasTrabalho)
let salDiaNumber = Number(salarioDia)
//Processando valores
let valHoraNumber = horasTrabNumber/salDiaNumber
//Conversão para não dar errp de NULL
let valorHora = String(valHoraNumber)
const mensagem = "Seu valor hora e " + valorHora + "!!!"
//Verificando variaveis
console.log(typeof valorHora)
console.log(typeof mensagem)
console.log(mensagem)
//saída de valores para Front End
alert(mensagem)