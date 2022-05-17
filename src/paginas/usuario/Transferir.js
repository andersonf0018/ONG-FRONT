import React from "react";
import "../../App.css";

import { Form, Card } from "react-bootstrap";

function Transferir() {
  return (
    <>
      <Card>
        <Card.Header className="card-header" as="h4">
          <span>Transferência</span>
        </Card.Header>
        <Card.Body className="card-body">
          <div className="container">
            <input
              className="form-control campo-transferir"
              type="text"
              placeholder="Matrícula"
              id="consulta-matricula"
              name="consulta-matricula"
            />
            <Form.Select className="campo-transferir">
              <option>Unidade de origem</option>
              <option value="origem-recife-centro">Recife - Centro</option>
              <option value="origem-recife-jardim-sp">
                Recife - Jardim São Paulo
              </option>
              <option value="origem-paudalho">Paudalho</option>
              <option value="origem-jaboatao">Jaboatão dos Guararapes</option>
            </Form.Select>
            <Form.Select className="campo-transferir">
              <option>Unidade de destino</option>
              <option value="destino-recife-centro">Recife - Centro</option>
              <option value="destino-recife-jardim-sp">
                Recife - Jardim São Paulo
              </option>
              <option value="destino-paudalho">Paudalho</option>
              <option value="destino-jaboatao">Jaboatão dos Guararapes</option>
            </Form.Select>
            <button class="submit-btn">Transferir</button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Transferir;
