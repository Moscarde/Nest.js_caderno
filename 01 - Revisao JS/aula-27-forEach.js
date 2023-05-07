const lista = [
	{
		nome: "José",
		idade: 13
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

// for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i])
// }

// lista.forEach((objeto) => console.log(objeto))

let soma = 0;

lista.forEach((objeto) => {
	soma += objeto.idade;
});

console.log("Soma:", soma);
