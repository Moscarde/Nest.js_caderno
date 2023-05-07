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

// Retorna true se um ou mais atenderem aos requisitos
const resultadoSome = lista.some( (pessoa) => pessoa.idade>40)
console.log(resultadoSome)

// Retorna true se todos os itens atenderem aos requisitos
const resultadoEvery = lista.every( (pessoa) => pessoa.idade>10)
console.log(resultadoEvery)