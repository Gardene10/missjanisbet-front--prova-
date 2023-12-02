import React, { useState } from 'react';
import authService from '../services/authService'; // Importe o serviço AuthService

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(username, password); // Chame o método login do serviço
      console.log('Login bem-sucedido! Token:', response.token);
      // Outras ações após um login bem-sucedido
    } catch (error) {
      console.error('Erro de login:', error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;