/*/ Declara variáveis
let idade 
let idadeAmigo
let diferencaIdade

// Perguntas ao usuário
idade = prompt("Digite a sua idade:")
idadeAmigo = prompt("Qual a idade do seu amigo?")

// Realiza cálculos e processos
resultado = idade >= idadeAmigo
alert(`Sua idade é maior que a do seu amigo?${resultado}`)*/

//let numeroUm

//numeroUm = prompt("Digite um numero par: ")

//console.log((numeroUm % 2) == 0)

/*let idadeEmAnos

idadeEmAnos = Number(prompt("quantos anos você tem?"))

alert(idadeEmAnos * 12)
alert(idadeEmAnos * 365)
alert(idadeEmAnos * 87660)*/

let numero1
let numero2

numero1 = Number(prompt("Escolha um primeiro numero:"))
numero2 = Number(prompt("Escolha um segundo numero: "))

resultado = numero1  >= numero2
alert(`O primeiro numero é maior que o segundo?${resultado}`)

resultado = numero1 === numero2
alert(`os dois numeros são iguais?$${resultado}`)

resultado = (numero1 % numero2) == 0
alert(`o primeiro numero é divisivel pelo segundo?${resultado}`)

resultado = (numero2 % numero1) == 0
alert(`o segundo numero é divisivel pelo primeiro?${resultado}`)




