import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/AlunoList.css'; // Importar o CSS

function AlunoList() {
  const [alunos, setAlunos] = useState([]);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/aluno')
      .then(response => {
        console.log('Dados recebidos:', response.data);
        setAlunos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar alunos:', error);
      });
  }, []);

  const mediaIRA = alunos.reduce((acc, aluno) => acc + aluno.ira, 0) / alunos.length;

  const toggleHighlight = () => {
    setHighlight(!highlight);
  };

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <button onClick={toggleHighlight}>Toggle Highlight</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Curso</th>
            <th>IRA</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => (
            <tr key={aluno.id} className={highlight ? (aluno.ira >= mediaIRA ? 'above-average' : 'below-average') : ''}>
              <td>{aluno.nome}</td>
              <td>{aluno.curso}</td>
              <td>{aluno.ira}</td>
            </tr>
          ))}
          <tr className="average-row">
            <td colSpan="2">Média IRA</td>
            <td>{mediaIRA.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AlunoList;