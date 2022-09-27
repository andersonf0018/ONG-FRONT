import React, { useState, useEffect } from "react";
import "../../../App.css";
import api from "../../../services/api";
import { Form, Card } from "react-bootstrap";

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
  // const [bairro, setBairro] = useState("");'
  
  
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
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Nome da mãe"
                  id="campo-cadastro-nome-mae"
                  name="nomeDaMae"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Nome do pai"
                  id="campo-cadastro-nome-pai"
                  name="nomeDoPai"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Naturalidade"
                  id="campo-cadastro-naturalidade"
                  name="naturalidade"
                  onChange={onChangeHandler}
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Nacionalidade"
                  id="campo-cadastro-nacionalidade"
                  name="nacionalidade"
                  onChange={onChangeHandler}
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="number"
                  placeholder="Idade"
                  id="campo-cadastro-idade"
                  name="idade"
                  min="0"
                  max="150"
                  onChange={onChangeHandler}
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  placeholder="Data de Nascimento"
                  type="date"
                  id="campo-cadastro-data-nascimento"
                  name="dataDeNascimento"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row">
                <div className="col mb-3">
                  <Form.Select>
                  <input 
                    className="form-control campo-cadastro-estado-civil col"
                    type="text"
                    placeholder="Estado Cívil"
                    id="campo-cadastro-estado-civil"
                    name="estadoCivil"
                    onChange={onChangeHandler}
                  />
                    <option>Estado Cívil</option>
                    <option value="solteiro">Solteiro(a)</option>
                    <option value="casado">Casado(a)</option>
                    <option value="divorciado">Divorciado(a)</option>
                    <option value="viuvo">Viúvo(a)</option>
                  </Form.Select>
                  
                </div>
                <div className="col mb-3">
                  <Form.Select>
                  <input
                    className="form-control campo-cadastro-raca col"
                    type="text"
                    placeholder="Raça"
                    id="campo-cadastro-raca"
                    name="raca"
                    onChange={onChangeHandler}
                  />
                    <option>Raça</option>
                    <option value="Branco">Branco(a)</option>
                    <option value="Preto">Preto(a)</option>
                    <option value="Pardo">Pardo(a)</option>
                    <option value="Amarelo">Amarelo(a)</option>
                    <option value="Indigena">Indígena</option>
                    <option value="Não Informada">Não informada</option>
                  </Form.Select>
                  
                </div>
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Escolaridade"
                  id="campo-cadastro-escolaridade"
                  name="escolaridade"
                  onChange={onChangeHandler}
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Profissão"
                  id="campo-cadastro-profissao"
                  name="profissao"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Contatos de Emergência"
                  id="campo-cadastro-contato-emergencia"
                  name="contatosDeEmergencia.numero1"
                  onChange={onChangeHandler}
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Contatos de Emergência"
                  id="campo-cadastro-contato-emergencia"
                  name="contatosDeEmergencia.numero2"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="CPF"
                  id="campo-cadastro-cpf"
                  name="CPF"
                  onChange={onChangeHandler}
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Sexo"
                  id="campo-cadastro-sexo"
                  name="sexo"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="RG"
                  id="campo-cadastro-rg"
                  name="RG"
                  onChange={onChangeHandler}
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Estado Emissor"
                  id="campo-cadastro-estado-emissor"
                  name="estadoEmissor"
                  onChange={onChangeHandler}
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="date"
                  placeholder="Data de Emissão"
                  id="campo-cadastro-emissao"
                  name="dataDeEmissaoRG"
                  onChange={onChangeHandler}
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Orgão Emissor"
                  id="campo-cadastro-orgao-emissor"
                  name="orgaoEmissor"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="CEP"
                  id="campo-cadastro-cep"
                  name="CEP"
                  onChange={onChangeHandler}
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Endereço"
                  id="campo-cadastro-endereço"
                  name="endereco"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Estado"
                  id="campo-cadastro-estado"
                  name="estado"
                  onChange={onChangeHandler}
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Munícipio"
                  id="campo-cadastro-municipio"
                  name="municipio"
                  onChange={onChangeHandler}
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Bairro"
                  id="campo-cadastro-bairro"
                  name="bairro"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Matricula"
                  id="campo-cadastro-matricula"
                  name="matricula"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row">
                {/* <Form.Select className="form-control campo-cadastro-usuario col">
                  <option>Unidade de Origem</option>
                  <option value="unidade-recife-centro">
                    Recife - Centro
                  </option>
                  <option value="unidade-recife-jardim-sp">
                    Recife - Jardim São Paulo
                  </option>
                  <option value="unidade-paudalho">Paudalho</option>
                  <option value="unidade-jaboatao">
                    Jaboatão dos Guararapes
                  </option>
                </Form.Select> */}
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Unidade de Origem"
                  id="campo-cadastro-origem"
                  name="unidadeDeOrigem"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row">
                <button className="submit-btn">Cadastrar</button>
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cadastros;