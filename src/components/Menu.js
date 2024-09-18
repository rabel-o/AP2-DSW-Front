import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/alunos">Lista de Alunos</Link>
                </li>
                <li>
                    <Link to="/alunos-por-curso">Alunos por Curso</Link>
                </li>
                <li>
                    <Link to="/alunos-agrupados-por-curso">Alunos Agrupados por Curso</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;