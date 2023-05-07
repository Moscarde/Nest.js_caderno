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
	}
];

// Retorna uma lista com todos os que satisfazerem o filtro
const filtrarPessoa = (pessoa) => pessoa.idade >= 25;

const listaFiltrada = lista.filter(filtrarPessoa);

console.log(listaFiltrada);
