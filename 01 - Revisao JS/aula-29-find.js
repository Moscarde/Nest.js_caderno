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

// Retorna o primeiro que satisfazer o filtro
const buscarPessoa = (pessoa) => pessoa.nome === "José";

const novaPessoa = lista.find(buscarPessoa);

console.log(novaPessoa);