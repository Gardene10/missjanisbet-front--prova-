import React, { Component } from 'react';
import enderecoService from '../services/enderecoService';

class EnderecoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enderecos: [],
    };
  }

  componentDidMount() {
    this.carregarEnderecos();
  }

  carregarEnderecos = () => {
    enderecoService.listarEnderecos()
      .then((response) => {
        this.setState({ enderecos: response.data });
      })
      .catch((error) => {
        // Lógica para lidar com erros, como exibir uma mensagem de erro.
      });
  }

  deletarEndereco = (codigo) => {
    enderecoService.deletarEndereco(codigo)
      .then((response) => {
        // Lógica para lidar com a exclusão bem-sucedida, como atualizar a lista de endereços.
        this.carregarEnderecos();
      })
      .catch((error) => {
        // Lógica para lidar com erros, como exibir uma mensagem de erro.
      });
  }

  render() {
    const { enderecos } = this.state;

    return (
      <div>
        <h2>Lista de Endereços</h2>
        <ul>
          {enderecos.map((endereco) => (
            <li key={endereco.id}>
              {endereco.logradouro} - {endereco.cidade}, {endereco.estado}
              <button onClick={() => this.deletarEndereco(endereco.id)}>Deletar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EnderecoList;