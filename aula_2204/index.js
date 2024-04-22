/*let nome = prompt("Qual é o seu nome?")
let email = prompt("Qual é o seu email?")
alert(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} !`)*/

const listaDeComidas = ["Pizaa", "Lasanha", "Hamburguer", "Bolo", "Massa"]
console.log(listaDeComidas) 
console.log("Essas são as minhas comidas preferidas:" + "\n" + listaDeComidas[0] + "\n" + listaDeComidas[1] + "\n" + listaDeComidas[2] + "\n" + listaDeComidas[3] + "\n" + listaDeComidas[4])
alert("Essas são as minhas comidas preferidas:" + "\n" + listaDeComidas[0] + "\n" + listaDeComidas[1] + "\n" + listaDeComidas[2] + "\n" + listaDeComidas[3] + "\n" + listaDeComidas[4])


const comida1 = prompt("E qual é a sua comida favorita?")
alert("Essas são as minhas comidas preferidas:" + "\n" + comida1 + "\n" + listaDeComidas[1] + "\n" + listaDeComidas[2] + "\n" + listaDeComidas[3] + "\n" + listaDeComidas[4])
let array
array = []
let listaDeTarefas = array

let tarefasUsuario = prompt("Digite uma tarefa que você precise realizar no dia de hoje: ")
    listaDeTarefas.push(tarefasUsuario)
    console.log(listaDeTarefas)
    
    tarefasUsuario = prompt("Digite uma tarefa que você precise realizar no dia de hoje: ")
    listaDeTarefas.push(tarefasUsuario)
    console.log(listaDeTarefas)
    
    tarefasUsuario = prompt("Digite uma tarefa que você precise realizar no dia de hoje: ")
    listaDeTarefas.push(tarefasUsuario)
    console.log(listaDeTarefas)

let indiceUsuario = prompt("Digite o índice de uma tarefa que já realizou: ")
listaDeTarefas.splice(indiceUsuario,1)
console.log(listaDeTarefas)