const lista = [
    {
        nome: "José",
        idade: 13,
        cartoes: ['3244', '5435']
    },
    {
        nome: "Joao",
        idade: 13,
        cartoes: ['4233', '5241']
    },
    {
        nome: "Maria",
        idade: 14,
        cartoes: ['6342', '2345']
    },
    {
        nome: "Franciscvo",
        idade: 54,
        cartoes: ['1234', '5678']
    },
    {
        nome: "Gabriela",
        idade: 19,
        cartoes: ['9876', '5432']
    },
    {
        nome: "André",
        idade: 15,
        cartoes: ['6789', '4321']
    },
    {
        nome: "Heitor",
        idade: 18,
        cartoes: ['2468', '1357']
    },
    {
        nome: "Isabel",
        idade: 21,
        cartoes: ['5555', '4444']
    },
    {
        nome: "Luis",
        idade: 28,
        cartoes: ['012', '8888']
    },
    {
        nome: "Antonio",
        idade: 32,
        cartoes: ['3333', '2222']
    },
    {
        nome: "Mariana",
        idade: 16,
        cartoes: ['1111', '9999']
    },
    {
        nome: "Ana",
        idade: 22,
        cartoes: ['2468', '1357']
    },
    {
        nome: "Vitoria",
        idade: 20,
        cartoes: ['2468', '1357']
    },
    {
        nome: "Fernando",
        idade: 26,
        cartoes: ['424', '8888']
    },
    {
        nome: "Gustavo",
        idade: 17,
        cartoes: ['1', '6789']
    },
    {
        nome: "Rafaela",
        idade: 23,
        cartoes: ['5555', '33']
    },
    {
        nome: "Pedro",
        idade: 24,
        cartoes: ['1234', '5678']
    },
    {
        nome: "Julia",
        idade: 18,
        cartoes: ['6342', '2345']
    },
    {
        nome: "Sofia",
        idade: 15,
        cartoes: ['9876', '5432']
    }
];

// retorna um array com arrays já desdestruturados 
const cartoes = lista.flatMap((cartao) => cartao.cartoes)

console.log(cartoes)