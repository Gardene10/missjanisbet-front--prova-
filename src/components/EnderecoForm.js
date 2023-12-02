import React, { Component } from 'react';
import enderecoService from '../services/enderecoService';

class EnderecoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endereco: {
        id: 0,
        logradouro: '',
        tipoLogradouro: 'AEROPORTO',
        cep: 0,
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        complemento: '',
        latitude: 0,
        longitude: 0,
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      endereco: {
        ...prevState.endereco,
        [name]: value,
      },
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { endereco } = this.state;

    // Enviar o endereço para o serviço
    enderecoService.salvarEndereco(endereco)
      .then((response) => {
        // Lógica para lidar com a resposta, como redirecionar ou mostrar uma mensagem de sucesso.
      })
      .catch((error) => {
        // Lógica para lidar com erros, como exibir uma mensagem de erro.
      });
  }

  render() {
    const { endereco } = this.state;

    return (
      <div>
        <h2>Formulário de Endereço</h2>
        <form onSubmit={this.handleSubmit}>
          {/* Renderize os campos do endereço aqui com os respectivos 'name' para que o handleChange funcione */}
          <div>
            <label>Logradouro:</label>
            <input
              type="text"
              name="logradouro"
              value={endereco.logradouro}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Tipo de Logradouro:</label>
            <select
              name="tipoLogradouro"
              value={endereco.tipoLogradouro}
              onChange={this.handleChange}
            >
              <option value="AEROPORTO">Aeroporto</option>
              <option value="RUA">Rua</option>
              <option value="AVENIDA">Avenida</option>
              {/* Adicione outras opções aqui */}
            </select>
          </div>
          <div>
            <label>CEP:</label>
            <input
              type="text"
              name="cep"
              value={endereco.cep}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Número:</label>
            <input
              type="text"
              name="numero"
              value={endereco.numero}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Bairro:</label>
            <input
              type="text"
              name="bairro"
              value={endereco.bairro}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Cidade:</label>
            <input
              type="text"
              name="cidade"
              value={endereco.cidade}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Estado:</label>
            <input
              type="text"
              name="estado"
              value={endereco.estado}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Complemento:</label>
            <input
              type="text"
              name="complemento"
              value={endereco.complemento}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Latitude:</label>
            <input
              type="text"
              name="latitude"
              value={endereco.latitude}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Longitude:</label>
            <input
              type="text"
              name="longitude"
              value={endereco.longitude}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" class="ant-btn ant-btn-primary">Salvar</button>
        </form>
      </div>
    );
  }
}

export default EnderecoForm;