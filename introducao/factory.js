function criarPessoa() {
  return {
    nome: "Ana",
    sobrenome: "Silva",
  };
}

console.log(criarPessoa());

function criarProduto(nomeProduto, preco) {
  return {
    nomeProduto: nomeProduto,
    preco, // como passou como parametro na fun não precisa colocar duas vezes, funciona em todos os parametros
    desc: 0.1,
  };
}

console.log(criarProduto("caderno", 35.99));
console.log(criarProduto("livro", 49.99));
console.log(criarProduto("caneta", 3.5));
console.log(criarProduto("corretivo", 7, 20));
