import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [mediaIra, setMediaIra] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarAlunos = async () => {
      try {
        const response = await fetch('http://localhost:3001/alunos');

        if (!response.ok) {
          throw new Error('Não foi possível buscar os dados dos alunos.');
        }

        const data = await response.json();
        setAlunos(data);

      } catch (error) {
        setErro(error.message);
        console.error("Erro ao buscar alunos:", error);
      } finally {
        setCarregando(false);
      }
    };

    buscarAlunos();
  }, []);

  useEffect(() => {
    if (alunos.length > 0) {
      const somaIras = alunos.reduce((acumulador, aluno) => acumulador + aluno.ira, 0);
      const media = somaIras / alunos.length;
      setMediaIra(media);
    }
  }, [alunos]);

  if (carregando) {
    return <p>Carregando...</p>;
  }

  if (erro) {
    return <p>Erro: {erro}</p>;
  }

  return (
    <div className="App">
      <h1>Lista de Alunos</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Curso</th>
            <th>IRA</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.nome}>
              <td>{aluno.nome}</td>
              <td>{aluno.curso}</td>
              <td>{aluno.ira.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>
        Média do IRA da Turma: {mediaIra.toFixed(2)}
      </h2>
    </div>
  );
}

export default App;