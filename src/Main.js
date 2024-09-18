import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlunoList from './components/AlunoList';
import AlunoGroupedByCurso from './components/AlunoGroupedByCurso';
import Menu from './components/Menu';

const Main = () => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/alunos" element={<AlunoList />} />
                <Route path="/alunos-por-curso" element={<AlunoGroupedByCurso />} />
                {/* Adicione outras rotas conforme necessário */}
            </Routes>
        </Router>
    );
};

export default Main;