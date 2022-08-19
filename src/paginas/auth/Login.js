import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HideBar from "../../components/HideBar.js";
import axios from "axios";
import auth from "../../middlewares/auth";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo-grande.png";

function Login(props) {
    let history = useHistory();
    const { handleSubmit, register } = useForm();
    const [login, setLogin] = useState("");

    const onSubmit = (data) => {
        axios
            .post("http://localhost:3333/ong/validarAcesso", {
                login: data.login,
                counter: data.senha,
            })
            .then((response) => {
                if (response.data.valido) {
                    history.push("/home");
                } else {
                    alert("Acesso inválido, patrão!");
                }
            });
        setLogin(data.login);
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
                            <form className="formulario-inicial" onSubmit={handleSubmit(onSubmit)}>
                                <div className="formulario-descricao">
                                    <h6 className="formulario-texto-titulo">Acessar</h6>
                                    <div></div>
                                    <span className="formulario-texto-descricao">Digite abaixo suas credenciais.</span>
                                </div>
                                <div className="campo-inicial">
                                    <i className="bi bi-person" />
                                    <input
                                        type="text"
                                        className="form-control campo-login"
                                        placeholder="Matrícula"
                                        id="matricula"
                                        {...register("login")}
                                    />
                                </div>
                                <div className="campo-inicial">
                                    <i className="bi bi-lock" />
                                    <input className="form-control campo-login" type="password" placeholder="Senha" {...register("senha")} />
                                </div>
                                <div className="formulario-botoes">
                                    <div className="row">
                                        <div className="lembrar-conta-checkbox col-6">
                                            <input type="checkbox" id="lembrar-conta" name="lembrar-conta" />
                                            <label for="lembrar-conta" className="label-lembrar-conta">
                                                Lembrar de mim
                                            </label>
                                        </div>
                                        <div className="esqueceu-senha col-6">
                                            <a className="esqueceu-senha-link" href="/esqueceu-senha">
                                                Esqueceu a senha?
                                            </a>
                                        </div>
                                    </div>
                                    <button className="botao-entrar" type="submit">
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
