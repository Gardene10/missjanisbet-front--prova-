import React, { useState, useEffect } from 'react';
import estadioService from '../services/estadioService';
import enderecoService from '../services/enderecoService';

const EstadioForm = () => {
  const [estadio, setEstadio] = useState({
    id: 0,
    nome: '',
    apelido:'',
    dtInauguracao:'',
    capacidade: 0,
    cidade: '',
    estado: '',
    enderecoId: 0,
    pais: '',
    latitude: 0,
    longitude: 0,
    endereco: {
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
      longitude: 0,
    },
  });

  const [searchId, setSearchId] = useState(0);
  const [isSearchEnabled, setIsSearchEnabled] = useState(true);

  useEffect(() => {
    if (!isSearchEnabled) {
      enderecoService.buscarEndereco(searchId)
        .then((response) => {
          const enderecoData = response.data;
          setEstadio((prevEstadio) => ({
            ...prevEstadio,
            enderecoId: enderecoData.id,
            endereco: {
              id: enderecoData.id,
              logradouro: enderecoData.logradouro,
              tipoLogradouro: enderecoData.tipoLogradouro,
              cep: enderecoData.cep,
              numero: enderecoData.numero,
              bairro: enderecoData.bairro,
              cidade: enderecoData.cidade,
              estado: enderecoData.estado,
              complemento: enderecoData.complemento,
              latitude: enderecoData.latitude,
              longitude: enderecoData.longitude,
            },
          }));
        })
        .catch((error) => {
          console.error('Erro ao:', error);
        });
    }
  }, [searchId, isSearchEnabled]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEstadio((prevEstadio) => ({
      ...prevEstadio,
      [name]: value,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearchEnabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    estadioService.salvar(estadio)
      .then((response) => {

      })
      .catch((error) => {
        console.error('Erro ao salvar estádio:', error);
      });
  };

  return (
    <div>
      <h2>Formulário de Estádio</h2>
      <form onSubmit={handleSubmit} className="estadio-form">
        <div className="search-container">
          <label>Pesquisar por ID:</label>
          <input
            type="number"
            name="searchId"
            value={searchId}
            onChange={handleSearchChange}
            disabled={!isSearchEnabled}
          />
          <button
            type="button"
            onClick={handleSearchSubmit}
            disabled={!isSearchEnabled}
          >
            Pesquisar
          </button>
        </div>

        <div className="form-fields">


          <label>Endereço:</label>
          <input
            type="number"
            name="enderecoId"
            value={estadio.endereco.id}
            onChange={handleChange}
            disabled
          />


          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={estadio.nome}
            onChange={handleChange}
            
          />

         <label>Capacidade:</label>
          <input
            type="number"
            name="capacidade"
            value={estadio.capacidade}
            onChange={handleChange}
            
          />

        <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={estadio.cidade}
            onChange={handleChange}
            
          />

          <label>Pais:</label>
          <input
            type="text"
            name="pais"
            value={estadio.pais}
            onChange={handleChange}
            
          />

          <label>Latitude:</label>
          <input
            type="text"
            name="latitude"
            value={estadio.latitude}
            onChange={handleChange}
            
          />

          <label>Longitude:</label>
          <input
            type="text"
            name="longitude"
            value={estadio.longitude}
            onChange={handleChange}
            
          />

          <label>Estado:</label>
          <input
            type="text"
            name="estado"
            value={estadio.estado}
            onChange={handleChange}
            
          />

         <label>Apelido:</label>
          <input
            type="text"
            name="apelido"
            value={estadio.apelido}
            onChange={handleChange}
            
          />

         <label>Data de Inauguração obs: colocar formato 01/01/2000</label>
          <input
            type="text"
            name="dtInauguracao"
            value={estadio.dtInauguracao}
            onChange={handleChange}
            
          />

          


          {estadio.endereco.id && (
            <div className="endereco-info">
              <h3>Endereço Encontrado:</h3>
              <p>{estadio.endereco.logradouro}, {estadio.endereco.numero}</p>
              <p>{estadio.endereco.bairro}, {estadio.endereco.cidade}, {estadio.endereco.estado}</p>
              <p>CEP: {estadio.endereco.cep}</p>
            </div>
          )}

          <button type="submit" className="ant-btn ant-btn-primary">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EstadioForm;