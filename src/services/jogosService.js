import axios from 'axios';

const API_URL = 'http://localhost:8090/api/partidas';

const partidaService = {
  salvarPartida: (partida) => {
    return axios.post(`${API_URL}/salvar`, partida);
  },
  
  editarPartida: (partidaId) => {
    return axios.get(`${API_URL}/editar/${partidaId}`);
  },

  buscarPartida: (partidaId) => {
    return axios.get(`${API_URL}/buscar/${partidaId}`);
  },

  listarPartidas: () => {
    return axios.get(`${API_URL}/list`);
  },

  deletarPartida: (partidaId) => {
    return axios.delete(`${API_URL}/deletar/${partidaId}`);
  },
};

export default partidaService;
