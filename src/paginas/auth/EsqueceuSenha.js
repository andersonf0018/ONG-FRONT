import React from "react";
import HideBar from "../../components/HideBar.js";

import logo from "../../assets/logo-grande.png";
import {Link} from 'react-router-dom';

function EsqueceuSenha() {
  return (
    <>
      <HideBar />
      <div className="tela-login">
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-6 logo-box">
              <img src={logo} alt="logo" class="logo-inicial" />
            </div>
            <div className="col-8 col-md-6 login">
              <form className="formulario-inicial">
                <div className="formulario-descricao">
                  <h6 className="formulario-texto-titulo">Esqueceu sua senha?</h6>
                  <span className="formulario-texto-descricao">
                    Digite abaixo sua Matrícula.
                  </span>
                </div>
                <div className="campo-inicial">
                  <i className="bi bi-person" />
                  <input
                    type="text"
                    className="form-control campo-login"
                    placeholder="Matrícula"
                    id="matricula"
                  />
                </div>
                <div className="formulario-botoes">
                  <Link to="/mudanca-senha">
                    <button className="botao-entrar">Mudar minha senha</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EsqueceuSenha;
