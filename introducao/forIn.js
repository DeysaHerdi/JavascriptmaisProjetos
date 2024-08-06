const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 20,
    peso: 60
}

for(let atributo in pessoa){
    console.log(`${atributo}: ${pessoa[atributo]}`)
}