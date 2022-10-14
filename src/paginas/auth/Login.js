import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import HideBar from "../../components/HideBar";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo-grande.png";
import api from "../../services/api";
import { AuthLogin } from "./AuthLogin";
import "./Login.css";
import Cookies from "js-cookie";
import { useEffect } from "react";


function Login() {
  const Auth = React.useContext(AuthLogin)
  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      Auth.setAuth(true);
    }
  };

  useEffect(() => {
    readCookie();
  }, [])

  let history = useHistory();
  const { handleSubmit, register } = useForm();
  const [login, setLogin] = useState("");
  const onSubmit = (data) => {
    api.post("validarAcesso", {
      login: data.login,
      counter: data.senha,
    }).then((response) => {
      if (response.data.valido && response.data.usuario === "Voluntário") {
        setLogin(response.data);
        Cookies.set("user", "loginTrue", { expires: 1 });
        readCookie();
        history.push("/home");
      } else if (response.data.valido && response.data.usuario === "Administrador") {
        setLogin(response.data);
        history.push("/home");
      } else if (response.data.valido && response.data.usuario === "Médico") {
        setLogin(response.data);
        history.push("/home");
      } else {
        alert("Acesso inválido, patrão!");
      }
    });
  };
  console.log(login)
  console.log(Auth.auth)

  return (
    <>
      <HideBar />
      <div className="login-screen">
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-6 logo-box">
              <img src={logo} alt="logo" class="initial-logo" />
            </div>
            <div className="col-8 col-md-6 login">
              <form className="initial-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="description-form">
                  <h6 className="title-text-form">Acessar</h6>
                  <div></div>
                  <span className="title-description-form">Digite abaixo suas credenciais.</span>
                </div>
                <div className="initial-field">
                  <i className="bi bi-person" />
                  <input
                    type="text"
                    className="form-control login-field"
                    placeholder="Matrícula"
                    id="matricula"
                    {...register("login")}
                  />
                </div>
                <div className="initial-field">
                  <i className="bi bi-lock" />
                  <input className="form-control login-field" type="password" placeholder="Senha" {...register("senha")} />
                </div>
                <div className="buttons-form">
                  <div className="row">
                    <div className="remember-account-checkbox col-6">
                      <input type="checkbox" id="lembrar-conta" name="lembrar-conta" />
                      <label for="lembrar-conta" className="label-remember-account">
                        Lembrar de mim
                      </label>
                    </div>
                    <div className="forgot-password col-6">
                      <a className="forgot-password-link" href="/esqueceu-senha">
                        Esqueceu a senha?
                      </a>
                    </div>
                  </div>
                  <button className="login-button" type="submit">
                    Entrar
                  </button>
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