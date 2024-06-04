/*const professor = {
	nome: "Victor",
	idade: "27",
	email: 'vitor@gmail.com'
}
alert (professor["email"])  

const filme = {
	nome: "Juntos e misturados" ,
	lançamento: "2014",
	elenco:[
		"adam sandler",
	    "Drew Barrymore",
	    "Bella thorne",
	    "Jessica Lowe"
	] ,
	JaVi: "Sim",
	direção: "Frank Coraci"
}
//console.log(filme.nome)
console.log(filme["direção"])

const pessoa = {
	nome: "Rafaela" ,
	idade: "18",
	generoMusical: "rap"
}
console.log(pessoa.idade)
console.log(pessoa.nome)
console.log(pessoa.generoMusical)
console.log("O nome dessa pessoa é.", pessoa.nome, "Ela tem" , pessoa.idade, "anos. E seu gênero musical favorito é", pessoa.generoMusical)*/

const filme = {
	nome: "Juntos e misturados" ,
	lançamento: "2014",
	elenco:[
		"adam sandler",
	    "Drew Barrymore",
	    "Bella thorne",
	    "Jessica Lowe"
	] ,
	personagens: [
		"Jim",
		"Lauren",
		"Hilary",
		"Ginger"
	],
	JaVi: "Sim",
	direção: "Frank Coraci"
}
console.log(filme.nome)
console.log(filme.lançamento)
console.log(filme.direção)
console.log(filme.elenco)
console.log(filme.jaVi)

let mensagem = ""
for(let i = 0; i <= 4; i++){
	mensagem = mensagem + filme.elenco[i] + "=" + filme.personagens[i] + "\n"
}
console.log(mensagem)