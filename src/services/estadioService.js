import axios from 'axios';

const API_URL = 'http://localhost:8090/api/estadios';

const estadioService = {
  salvar: (estadio) => {
    return axios.post(`${API_URL}/salvar`, estadio);
  },
  
  editar: (codigo) => {
    return axios.get(`${API_URL}/editar/${codigo}`);
  },

  buscar: (codigo) => {
    return axios.get(`${API_URL}/buscar/${codigo}`);
  },

  listar: () => {
    return axios.get(API_URL);
  },

  deletar: (codigo) => {
    return axios.delete(`${API_URL}/deletar/${codigo}`);
  },
};

export default estadioService;