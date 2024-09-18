import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AlunoList from './components/AlunoList';
import AlunoGroupedByCurso from './components/AlunoGroupedByCurso';
import './css/App.css'; // Importar o CSS

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className="dropdown">
              <Link to="#" className="dropbtn">Menu</Link>
              <div className="dropdown-content">
                <Link to="/alunos">Listar Alunos</Link>
                <Link to="/alunos/curso">Alunos por Curso</Link>
              </div>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/alunos" element={<AlunoList />} />
          <Route path="/alunos/curso" element={<AlunoGroupedByCurso />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;