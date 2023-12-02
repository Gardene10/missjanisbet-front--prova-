import React, { Component } from 'react';
import partidaService from '../services/jogosService'; 

class PartidaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partidas: [],
    };
  }

  componentDidMount() {
    this.carregarPartidas();
  }

  carregarPartidas = () => {
    partidaService.listarPartidas()
      .then((response) => {
        this.setState({ partidas: response.data });
      })
      .catch((error) => {
        // Lógica para lidar com erros, como exibir uma mensagem de erro.
      });
  }

  render() {
    const { partidas } = this.state;

    return (
      <div>
        <h2>Lista de Partidas</h2>
        <ul>
          {partidas.map((partida) => (
            <li key={partida.id}>
              {partida.mandante.nome} vs {partida.visitante.nome} - Placar: {partida.placar.placarA} x {partida.placar.placarB}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PartidaList;
