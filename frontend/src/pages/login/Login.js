import React, { Component } from 'react';

import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <form>
          <input placeholder="Nome de usuário"/>
          <button type="submit">Entrar</button>        
        </form>
      </div>
    );
  }
}
