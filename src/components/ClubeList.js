import React, { Component } from 'react';
import clubeService from '../services/clubeService';

class ClubeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubes: [],
    };
  }

  componentDidMount() {
    this.carregarClubes();
  }

  carregarClubes = () => {
    clubeService.listarClubes()
      .then((response) => {
        this.setState({ clubes: response.data });
      })
      .catch((error) => {
        // Lógica para lidar com erros, como exibir uma mensagem de erro.
      });
  }

  deletarClube = (codigo) => {
    clubeService.deletarClube(codigo)
      .then((response) => {
        // Lógica para lidar com a exclusão bem-sucedida, como atualizar a lista de endereços.
        this.carregarClubes();
      })
      .catch((error) => {
        // Lógica para lidar com erros, como exibir uma mensagem de erro.
      });
  }

  render() {
    const { clubes } = this.state;

    return (
      <div>
        <h2>Lista de Clubes</h2>
        <ul>
          {clubes.map((clube) => (
            <li key={clube.id}>
              {clube.nome} - {clube.sede.uf}, {clube.fundacao}
              <button onClick={() => this.deletarClube(clube.id)}>Deletar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClubeList;