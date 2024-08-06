const aaray = [
  {
    cor: "Azul",
    preco: 10,
    quantia: 5,
  },
  {
    cor: "Verde",
    preco: 1,
    quantia: 2,
  },
];

const elem = item => item

console.log(aaray.map(elem))


const total = valor => valor.preco * valor.quantia
console.log(aaray.map(total))


const azul = item => item.cor === "Azul"
console.log(aaray.filter(azul))

const verde = aaray.filter(cor=> cor.cor === "Verde")
console.log(verde)