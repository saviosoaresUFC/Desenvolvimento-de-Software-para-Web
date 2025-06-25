const alunos = [
  { nome: 'Ana Carolina', curso: 'Engenharia de Software', ira: 8.5 },
  { nome: 'Bruno Gomes', curso: 'Ciência da Computação', ira: 7.8 },
  { nome: 'Carlos de Souza', curso: 'Sistemas de Informação', ira: 9.2 },
  { nome: 'Daniela Ferreira', curso: 'Engenharia da Computação', ira: 6.9 },
  { nome: 'Eduardo Martins', curso: 'Análise e Desenv. de Sistemas', ira: 8.8 }
];

const listarTodos = () => {
  return alunos;
};

module.exports = {
  listarTodos
};