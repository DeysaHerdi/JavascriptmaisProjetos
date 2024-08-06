const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Ana", nota: 6.5, bolsista: true },
  { nome: "Claudia", nota: 8.5, bolsista: true },
  { nome: "Luiz", nota: 1.5, bolsista: false },
];

const temBolsa = (aluno) => aluno.bolsista;
const nomeDosBolsistas = (aluno) => aluno.nome;
console.log(
  alunos.filter(temBolsa).reduce(nomeDosBolsistas) //teinar reducer
);

