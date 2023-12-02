import React, { Component } from 'react';
import clubeService from '../services/clubeService';

class clubeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clube: {
        id: 0,
        nome: '',
        sede: {
          id: 0,
          logradouro: '',
          tipoLogradouro: '',
          cep: 0,
          numero: '',
          bairro: '',
          cidade: '',
          estado: '',
          complemento: '',
          latitude: 0,
          longitude: 0
        },
        uf: '',
        fundacao: null,
        mascote: '',
        presidente: '',
        treinador: ''
      }
    } 
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      clube: {
        ...prevState.clube,
        [name]: value,
      },
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { clube } = this.state;

    // Enviar o endereço para o serviço
    clubeService.salvarClube(clube)
      .then((response) => {
        // Lógica para lidar com a resposta, como redirecionar ou mostrar uma mensagem de sucesso.
      })
      .catch((error) => {
        // Lógica para lidar com erros, como exibir uma mensagem de erro.
      });
  }

  render() {
    const { clube } = this.state;

    return (
      <div>
        <h2>Formulário de Clube</h2>
        <form onSubmit={this.handleSubmit}>
          {/* Renderize os campos do endereço aqui com os respectivos 'name' para que o handleChange funcione */}
          <div>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={clube.nome}
              onChange={this.handleInputChange}
            />
          </label>
          </div>
          <div>
          <label>
            UF:
            <input
              type="text"
              name="uf"
              value={clube.uf}
              onChange={this.handleInputChange}
            />
          </label>
          </div>
          <div>
          <label>
            Fundação:
            <input
              type="text"
              name="fundacao"
              value={clube.fundacao}
              onChange={this.handleInputChange}
            />
          </label>
          </div>
          <div>
          <label>
            Mascote:
            <input
              type="text"
              name="mascote"
              value={clube.mascote}
              onChange={this.handleInputChange}
            />
          </label>
          </div>
          <div>
          <label>
            Presidente:
            <input
              type="text"
              name="presidente"
              value={clube.presidente}
              onChange={this.handleInputChange}
            />
          </label>
          </div>
          <div>
          <label>
            Treinador:
            <input
              type="text"
              name="treinador"
              value={clube.treinador}
              onChange={this.handleInputChange}
            />
          </label>
          </div>
          <div>
            <label>Logradouro:</label>
            <input
              type="text"
              name="logradouro"
              value={clube.sede.logradouro}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Tipo de Logradouro:</label>
            <select
              name="tipoLogradouro"
              value={clube.sede.tipoLogradouro}
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
              value={clube.sede.cep}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Número:</label>
            <input
              type="text"
              name="numero"
              value={clube.sede.numero}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Bairro:</label>
            <input
              type="text"
              name="bairro"
              value={clube.sede.bairro}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Cidade:</label>
            <input
              type="text"
              name="cidade"
              value={clube.sede.cidade}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Estado:</label>
            <input
              type="text"
              name="estado"
              value={clube.sede.estado}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Complemento:</label>
            <input
              type="text"
              name="complemento"
              value={clube.sede.complemento}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Latitude:</label>
            <input
              type="text"
              name="latitude"
              value={clube.sede.latitude}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Longitude:</label>
            <input
              type="text"
              name="longitude"
              value={clube.sede.longitude}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" class="ant-btn ant-btn-primary">Salvar</button>
        </form>
      </div>
    );
  }
}

export default clubeForm;