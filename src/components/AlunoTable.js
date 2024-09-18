import React, { useEffect, useState } from 'react';
import AlunoService from '../services/AlunoService';

const AlunosTable = () => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        AlunoService.getAlunos().then(response => {
            setAlunos(response.data);
        });
    }, []);

    const totalIRA = alunos.reduce((acc, aluno) => acc + aluno.ira, 0);
    const mediaIRA = totalIRA / alunos.length;

    return (
        <table id="alunosTable">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>IRA</th>
                </tr>
            </thead>
            <tbody>
                {alunos.map(aluno => (
                    <tr key={aluno.id}>
                        <td>{aluno.nome}</td>
                        <td>{aluno.ira}</td>
                    </tr>
                ))}
                <tr style={{ backgroundColor: 'yellow' }}>
                    <td>Média IRA</td>
                    <td>{mediaIRA.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default AlunosTable;