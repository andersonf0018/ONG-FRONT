import React from "react";
import HideBar from "../../components/HideBar.js";

import logo from "../../assets/logo-grande.png";

function MudancaSenha() {
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
                  <h6 className="formulario-texto-titulo">Mudando sua senha</h6>
                  <span className="formulario-texto-descricao">
                    Digite abaixo sua nova Senha.
                  </span>
                </div>
                <div className="campo-inicial">
                <i className="bi bi-lock" />
                  <input
                    className="form-control campo-login"
                    type="password"
                    placeholder="Nova senha"
                  />
                </div>
                <div className="campo-inicial">
                <i className="bi bi-lock" />
                  <input
                    className="form-control campo-login"
                    type="password"
                    placeholder="Confirmar nova senha"
                  />
                </div>
                <div className="formulario-botoes">
                  <button className="botao-entrar">Mudar minha senha</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MudancaSenha;
