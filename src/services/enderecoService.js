import axios from 'axios';

const API_URL = 'http://localhost:8090/api/enderecos';

const enderecoService = {
  salvarEndereco: (endereco) => {
    return axios.post(`${API_URL}/salvar`, endereco);
  },
  
  editarEndereco: (codigo) => {
    return axios.get(`${API_URL}/editar/${codigo}`);
  },

  buscarEndereco: (codigo) => {
    return axios.get(`${API_URL}/buscar/${codigo}`);
  },

  listarEnderecos: () => {
    return axios.get(`${API_URL}/list`);
  },

  deletarEndereco: (codigo) => {
    return axios.delete(`${API_URL}/deletar/${codigo}`);
  },
};

export default enderecoService;