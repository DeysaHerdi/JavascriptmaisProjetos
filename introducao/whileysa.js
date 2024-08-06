function aleatorio(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let jogadas = 0

while(jogadas != -1){
    jogadas = aleatorio(-1,10)
    console.log(`A Jogada é: ${jogadas}`)
}

console.log('Fim xD')