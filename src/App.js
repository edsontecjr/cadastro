import React, { useState } from 'react';

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verifique se o nome de usuário e a senha estão corretos
    // Redirecione o usuário ou exiba uma mensagem de erro
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Cadastrar" />
    </form>
  );
}

export default LoginScreen;
