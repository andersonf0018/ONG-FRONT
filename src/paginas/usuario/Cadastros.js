import React from "react";
import "../../App.css";

import { Form, Card } from "react-bootstrap";

function Cadastros() {
  return (
    <>
      <Card>
        <Card.Header className="card-header" as="h4">Cadastro</Card.Header>
        <Card.Body className="card-body">
          <form className="formulario">
            <div className="container">
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Nome completo"
                  id="campo-cadastro-nome"
                  name="campo-cadastro-nome"
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Nome da mãe"
                  id="campo-cadastro-nome-mae"
                  name="campo-cadastro-nome-mae"
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Nome do pai"
                  id="campo-cadastro-nome-pai"
                  name="campo-cadastro-nome-pai"
                />
              </div>
              <div className="row">
                <Form.Select className="form-control campo-cadastro-usuario col">
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
                </Form.Select>
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Naturalidade"
                  id="campo-cadastro-naturalidade"
                  name="campo-cadastro-naturalidade"
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Nacionalidade"
                  id="campo-cadastro-nacionalidade"
                  name="campo-cadastro-nacionalidade"
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="number"
                  placeholder="Idade"
                  id="campo-cadastro-idade"
                  name="campo-cadastro-idade"
                  min="0"
                  max="150"
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  placeholder="Data de Nascimento"
                  type="text"
                  id="campo-cadastro-data-nascimento"
                  name="campo-cadastro-data-nascimento"
                />
              </div>
              <div className="row">
                <div className="col mb-3">
                  <Form.Select>
                    <option>Estado Cívil</option>
                    <option value="solteiro">Solteiro(a)</option>
                    <option value="casado">Casado(a)</option>
                    <option value="divorciado">Divorciado(a)</option>
                    <option value="viuvo">Viúvo(a)</option>
                  </Form.Select>
                </div>
                <div className="col mb-3">
                  <Form.Select>
                    <option>Raça</option>
                    <option value="branco">Branco(a)</option>
                    <option value="preto">Preto(a)</option>
                    <option value="pardo">Pardo(a)</option>
                    <option value="amarelo">Amarelo(a)</option>
                    <option value="indigena">Indígena</option>
                    <option value="nao-informada">Não informada</option>
                  </Form.Select>
                </div>
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Escolaridade"
                  id="campo-cadastro-escolaridade"
                  name="campo-cadastro-escolaridade"
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Profissão"
                  id="campo-cadastro-profissao"
                  name="campo-cadastro-profissao"
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type=""
                  placeholder="Contatos de Emergência"
                  id="campo-cadastro-contato-emergencia"
                  name="campo-cadastro-contato-emergencia"
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="CPF"
                  id="campo-cadastro-cpf"
                  name="campo-cadastro-cpf"
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Sexo"
                  id="campo-cadastro-sexo"
                  name="campo-cadastro-sexo"
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="RG"
                  id="campo-cadastro-rg"
                  name="campo-cadastro-rg"
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Estado Emissor"
                  id="campo-cadastro-estado-emissor"
                  name="campo-cadastro-estado-emissor"
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Emissão"
                  id="campo-cadastro-emissao"
                  name="campo-cadastro-emissao"
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Orgão Emissor"
                  id="campo-cadastro-orgao-emissor"
                  name="campo-cadastro-orgao-emissor"
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="CEP"
                  id="campo-cadastro-cep"
                  name="campo-cadastro-cep"
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Endereço"
                  id="campo-cadastro-endereço"
                  name="campo-cadastro-endereço"
                />
              </div>
              <div className="row">
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Estado"
                  id="campo-cadastro-estado"
                  name="campo-cadastro-estado"
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Munícipio"
                  id="campo-cadastro-municipio"
                  name="campo-cadastro-municipio"
                />
                <input
                  className="form-control campo-cadastro-usuario col"
                  type="text"
                  placeholder="Bairro"
                  id="campo-cadastro-bairro"
                  name="campo-cadastro-bairro"
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
