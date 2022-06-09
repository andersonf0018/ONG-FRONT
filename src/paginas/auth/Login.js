import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HideBar from "../../components/HideBar.js";
import axios from "axios";
import auth from "../../middlewares/auth";
import logo from "../../assets/logo-grande.png";

function Login() {
  let history = useHistory();

  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const login = () => {
    axios.post('http://localhost:3333/ong/validarAcesso', {
      matricula: matricula,
      counter: senha,
    }).then((response) => {
      console.log(response.data);
      history.push("/home");
    })
  };

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
                  <h6 className="formulario-texto-titulo">Acessar</h6>
                  <div>
                  </div>
                  <span className="formulario-texto-descricao">
                    Digite abaixo suas credenciais.
                  </span>
                </div>
                <div className="campo-inicial">
                  <i className="bi bi-person" />
                  <input
                    type="text"
                    className="form-control campo-login"
                    placeholder="Matrícula"
                    id="matricula"
                    onChange={(e) => {
                      setMatricula(e.target.value);
                    }}
                  />
                </div>
                <div className="campo-inicial">
                  <i className="bi bi-lock" />
                  <input
                    className="form-control campo-login"
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => {
                      setSenha(e.target.value);
                    }}
                  />
                </div>
                <div className="formulario-botoes">
                  <div className="row">
                    <div className="lembrar-conta-checkbox col-6">
                      <input
                        type="checkbox"
                        id="lembrar-conta"
                        name="lembrar-conta"
                      />
                      <label for="lembrar-conta" className="label-lembrar-conta">
                        Lembrar de mim
                      </label>
                    </div>
                    <div className="esqueceu-senha col-6">
                      <a className="esqueceu-senha-link" href="/esqueceu-senha">Esqueceu a senha?</a>
                    </div>
                  </div>
                  <button
                    onClick={login}
                    className="botao-entrar">Entrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;
