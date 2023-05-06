const lista = [
    {
        nome: 'José',
        idade: 13
    },
    {
        nome: 'Joao',
        idade: 13
    },
    {
        nome: 'Maria',
        idade: 14
    },
    {
        nome: 'Franciscvo',
        idade: 54
    },
    {
        nome: 'Gabriela',
        idade: 19
    },
    {
        nome: 'André',
        idade: 15
    },
    {
        nome: 'Heitor',
        idade: 18
    },

]

// console.log(lista.map( objeto => objeto.idade))



const converterObjeto = (objeto) => {
    return {
        ...objeto,
        mensagem: `Bem vindo ${objeto.nome} ${objeto.idade}`
    }
}

console.log(lista.map( converterObjeto ))