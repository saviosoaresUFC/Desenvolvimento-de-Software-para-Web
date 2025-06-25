const AlunoModel = require('../models/alunoModel');

const listarAlunos = (req, res) => {
  try {
    const alunos = AlunoModel.listarTodos();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ message: 'Ocorreu um erro no servidor.' });
    console.error(error);
  }
};

module.exports = {
  listarAlunos
};