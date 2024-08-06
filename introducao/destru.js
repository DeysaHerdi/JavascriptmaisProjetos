const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log(pessoa.nome)

//Destru 

const {idade,nome } = pessoa
console.log(idade, nome)

const localidade = pessoa.endereco.numero
console.log(localidade)
console.log(pessoa.numero)

const { endereco: local} = pessoa
console.log(local)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// Destru Array
const [a] = [10]
console.log(a)

const [n1, ,n3, ,n5, n6=0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)