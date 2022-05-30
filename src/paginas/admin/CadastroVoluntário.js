import React from "react";
import "../../App.css";

import { Form, Card, FormCheck } from "react-bootstrap";

function CadastroVoluntario() {
  return (
    <>
      <Card>
        <Card.Header className="card-header" as="h4">
          <span>Cadastro Administrativo</span>
        </Card.Header>
        <Card.Body className="card-body">
          <div className="container">
          <input
              className="form-control campo-transferir"
              type="text"
              placeholder="Nome"
              id="cadastro-admin"
              name="cadastro-admin"
            />
            <input
              className="form-control campo-transferir"
              type="text"
              placeholder="Matrícula"
              id="cadastro-admin-matricula"
              name="cadastro-admin-matricula"
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
            <p>Função:</p>
            <FormCheck label="Voluntário"/>
            <FormCheck label="Funcionário Adiministrativo"/>
            <FormCheck label="Direção"/>
          </div>
          <div className="row">
                <button className="submit-btn">Cadastrar Usuário</button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CadastroVoluntario;
