import axios from 'axios';

const API_URL = 'http://localhost:8080/aluno';

class AlunoService {
    getAlunos() {
        return axios.get(API_URL);
    }

    createAluno(aluno) {
        return axios.post(API_URL, aluno);
    }

    getAlunoById(alunoId) {
        return axios.get(`${API_URL}/${alunoId}`);
    }

    updateAluno(alunoId, aluno) {
        return axios.put(`${API_URL}/${alunoId}`, aluno);
    }

    deleteAluno(alunoId) {
        return axios.delete(`${API_URL}/${alunoId}`);
    }
}

export default new AlunoService();