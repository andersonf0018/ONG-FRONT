import React, { useState, useEffect } from "react";
import "../../../App.css";
import api from "../../../services/api";
import { Form, Card } from "react-bootstrap";
import { Select } from 'react-select';

const Continue = e => {
  e.preventDefault();
  nextStep();
}

function Cadastros() {

  // const [nomeCompleto, setNomeCompleto] = useState("");
  // const [nomeDaMae, setNomeDaMae] = useState("");
  // const [nomeDoPai, setNomeDoPai] = useState("");
  // const [naturalidade, setNaturalidade] = useState("");
  // const [nacionalidade, setNacionalidade] = useState("");
  // const [idade, setIdade] = useState("");
  // const [dataDeNascimento, setDataDeNascimento] = useState("");
  // const [estadoCivil, setEstadoCivil] = useState("");
  // const [raca, setRaca] = useState("");
  // const [escolaridade, setEscolaridade] = useState("");
  // const [profissao, setProfissao] = useState("");
  // const [contatoEmergencia1, setContatoEmergencia1] = useState("");
  // const [contatoEmergencia2, setContatoEmergencia2] = useState("");
  // const [cpf, setCPF] = useState("");
  // const [sexo, setSexo] = useState("");
  // const [rg, setRG] = useState("");
  // const [estadoEmissor, setEstadoEmissor] = useState("");
  // const [dataDeEmissaoRG, setDataDeEmissaoRG] = useState("");
  // const [orgaoEmissor, setOrgaoEmissor] = useState("");
  // const [cep, setCep] = useState("");
  // const [endereco, setEndereco] = useState("");
  // const [estado, setEstado] = useState("");
  // const [municipio, setMunicipio] = useState("");
  // const [bairro, setBairro] = useState("");
  const [form, setForm] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    api.post('cadastrarAcolhido', form)
      .then(response => {
        alert("Cadastrado com Sucesso!")
        console.log(response);
      }).catch(e => console.log(e));
  };

  return (
    <>
      <Card>
        <Card.Header className="card-header" as="h4">Cadastro</Card.Header>
        <Card.Body className="card-body">
          <form className="formulario" onSubmit={onSubmitHandler}>
            <div className="container">
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Nome completo"
                  id="campo-cadastro-nome"
                  name="nomeCompleto"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row">
                <button className="submit-btn">Cadastrar</button>
                <button className="submit-btn"
                        onClick={Continue}
                >proximo</button>
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cadastros;