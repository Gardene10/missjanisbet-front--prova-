import axios from 'axios';

const API_URL = 'http://localhost:8090/api/clubes';

const clubeService = {
  salvarClube: (clube) => {
    return axios.post(`${API_URL}/salvar`, clube);
  },

  listarClubes: () => {
    return axios.get(`${API_URL}/list`);
  },

  deletarClube: (codigo) => {
    return axios.delete(`${API_URL}/deletar/${codigo}`);
  },
};

export default clubeService;