const API_URL = 'http://localhost:8090/api/auth';
class AuthService {
    async login(username, password) {
      try {
        const response = await fetch(`${API_URL}/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (!response.ok) {
          const error = await response.text();
          throw new Error(error);
        }
  
        const data = await response.json();
        localStorage.setItem('token', data.token); // Armazena o token no localStorage
  
        return data;
      } catch (error) {
        throw new Error('Erro ao efetuar login');
      }
    }
  
    // Outros métodos: logout, getToken, etc.
  }
  
  const authService = new AuthService();
  export default authService;