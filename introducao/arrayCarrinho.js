const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
];
//const paraObj = JSON.parse(carrinho) Assim vc esta chamando para um array que contem 2 strings por isso naum da certo, JSON parse so aceita string!
const paraArray = (json) => JSON.parse(json);
const soPreco = (item) => item.preco;

const resultado = carrinho.map(paraArray).map(soPreco);
console.log(resultado);
