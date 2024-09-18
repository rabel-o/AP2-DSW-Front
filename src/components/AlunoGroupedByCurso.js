import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AlunoGroupedByCurso() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/aluno')
      .then(response => {
        setAlunos(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the alunos!', error);
      });
  }, []);

  const groupedAlunos = alunos.reduce((acc, aluno) => {
    if (!acc[aluno.curso]) {
      acc[aluno.curso] = [];
    }
    acc[aluno.curso].push(aluno);
    return acc;
  }, {});

  return (
    <div>
      <h1>Alunos por Curso</h1>
      {Object.keys(groupedAlunos).map(curso => (
        <div key={curso}>
          <h2>{curso}</h2>
          <ul>
            {groupedAlunos[curso].map(aluno => (
              <li key={aluno.id} style={{ fontWeight: aluno.ira >= 7 ? 'bold' : 'normal' }}>
                {aluno.nome} - IRA: {aluno.ira}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AlunoGroupedByCurso;