import React from "react";
import "../../App.css";

import { Form, Table, Card } from "react-bootstrap";

function Relatorios() {
  return (
    <>
      <Card>
        <Card.Header className="card-header" as="h4">
          <div className="row">
            <div class="col-6">
              <span>Relatorios</span>
            </div>
            <div class="col-6">
              <div class="row">
                <div className="col-8">
                  <Form.Select>
                    <option>Selecione a unidade</option>
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
                <div className="col-4">
                  <button className="horizontal-btn">Consultar</button>
                </div>
              </div>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="card-body">
        <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>CPF</th>
                <th>Unidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Marcos</td>
                <td>02307485</td>
                <td>298347148-92</td>
                <td>Recife Centro</td>
                <td className="card-vermais"><a href="#" class=""><i class="bi bi-plus-square-fill"></i></a></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

export default Relatorios;
