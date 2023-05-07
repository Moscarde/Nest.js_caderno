const lista = [
	{
		nome: "José",
		idade: 13,
		exibir: true
	},
	{
		nome: "Joao",
		idade: 13
	},
	{
		nome: "Maria",
		idade: 14
	},
	{
		nome: "Franciscvo",
		idade: 54
	},
	{
		nome: "Gabriela",
		idade: 19
	},
	{
		nome: "André",
		idade: 15
	},
	{
		nome: "Heitor",
		idade: 18
	},
	{
		nome: "Isabel",
		idade: 21
	},
	{
		nome: "Luis",
		idade: 28
	},
	{
		nome: "Antonio",
		idade: 32
	},
	{
		nome: "Mariana",
		idade: 16
	},
	{
		nome: "Ana",
		idade: 22
	},
	{
		nome: "Vitoria",
		idade: 20
	},
	{
		nome: "Fernando",
		idade: 26
	},
	{
		nome: "Gustavo",
		idade: 17
	},
	{
		nome: "Rafaela",
		idade: 23
	},
	{
		nome: "Pedro",
		idade: 24
	},
	{
		nome: "Julia",
		idade: 18
	},
	{
		nome: "Sofia",
		idade: 15
	}
];


// Sortear por idade
lista.sort((a, b) => {
	if (a.idade < b.idade) {
		return -1;
	}
	if (a.idade > b.idade) {
		return 1
	}
	return 0
});

const listaNomeCresc = [...lista]
listaNomeCresc.sort((a, b) => {
	if (a.nome.toUpperCase() < b.nome.toUpperCase()) {
		return -1
	}
	if (a.nome.toUpperCase() > b.nome.toUpperCase()) {
		return 1
	}
	return 0
})

console.log(lista)
console.log(listaNomeCresc)