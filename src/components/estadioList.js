import React, { Component } from 'react';
import estadioService from '../services/estadioService';

class EstadioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estadios: [],
    };
  }

  componentDidMount() {
    this.carregarEstadios();
  }

  carregarEstadios = () => {
    estadioService.listar()
      .then((response) => {
        this.setState({ estadios: response.data });
      })
      .catch((error) => {
        // Lógica para lidar com erros, como exibir uma mensagem de erro.
      });
  }

  deletarEstadio = (codigo) => {
    estadioService.deletar(codigo)
      .then((response) => {
        // Lógica para lidar com a exclusão bem-sucedida, como atualizar a lista de estádios.
        this.carregarEstadios();
      })
      .catch((error) => {
        // Lógica para lidar com erros, como exibir uma mensagem de erro.
      });
  }

  render() {
    const { estadios } = this.state;

    return (
      <div>
        <h2>Lista de Estádios</h2>
        <ul>
          {estadios.map((estadio) => (
            <li key={estadio.id}>
              {estadio.nome} - {estadio.cidade}, {estadio.estado}
              <button onClick={() => this.deletarEstadio(estadio.id)}>Deletar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EstadioList;