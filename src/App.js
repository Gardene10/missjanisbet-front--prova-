import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EnderecoForm from './components/EnderecoForm';
import EnderecoList from './components/EnderecoList';
import LoginForm from './components/LoginForm';
import ClubeForm from './components/ClubeForm';
import ClubeList from './components/ClubeList';
import EstadioForm from './components/EstadioForm';
import EstadioList from './components/estadioList';
import Index from './components/IndexJogos';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/enderecos/form" element={<EnderecoForm />} />
          <Route path="/enderecos/list" element={<EnderecoList />} />
          <Route path="/clubes/form" element={<ClubeForm />} />
          <Route path="/clubes/list" element={<ClubeList />} />
          <Route path="/estadios/form" element={<EstadioForm />} />
          <Route path="/estadios/list" element={<EstadioList />} />
          <Route path="/index/jogos" element={<Index />} />
          

          <Route path="/" element={<LoginForm />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;