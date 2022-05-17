import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../App.css";
import api from "../../services/api";

import { Table, Card, Modal, Button } from "react-bootstrap";

function Consultar() {
  const [show, setShow] = useState(false);
  const [acolhidos, setAcolhidos] = useState([]);

  useEffect(() => {
    api.get("http://localhost:3333/ong/todosOsAcolhidos").then(({ data }) => {
      setAcolhidos(data);
    }).catch(error => console.log(error));
  }, [acolhidos]);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w modal-detalhes"
      >
        <Modal.Header closeButton className="card-header">
          <Modal.Title id="example-custom-modal-styling-title">
            Nome do acolhido
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="container"></div>
            <div className="row falso-form">
              <p>Data de entrada: <span>16/06/2021</span></p>
            </div>
            <div className="row falso-form">
              <p>Número de internações: <span>4</span></p>
            </div>
            <div className="row falso-form">
              <p>Unidade de origem: <span>Recife-Centro</span></p>
            </div>
            <div className="row falso-form">
              <p>Contatos de emergência: <span>(81) 98726-7365 / (81) 98342-6557</span></p>
            </div>
            <div className="row falso-form">
              <p>Usuário que realizou o cadastramento: <span><i className="modal-texto-desabilitado">Não disponível</i></span></p>
            </div>
            <div className="row falso-form">
              <p>Previsão de Saída: <span>2022</span></p>
            </div>
            <div className="row falso-form">
              <p>Data de saída: <span><i className="modal-texto-desabilitado">Não disponível</i></span></p>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Card>
        <Card.Header className="card-header" as="h4">
          <div className="row">
            <div className="col-6">
              <span>Consulta</span>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-8">
                  <input
                    className="form-control consulta-matricula"
                    type="text"
                    placeholder="Matrícula"
                    id="consulta-matricula"
                    name="consulta-matricula"
                  />
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
                <th>Nome</th>
                <th>Matrícula</th>
                <th>CPF</th>
                <th>Unidade</th>
              </tr>
            </thead>
            <tbody>
              {acolhidos.map(acolhido => {
                return (
                  <tr>
                    <td>{acolhido.nomeCompleto}</td>
                    <td>02307485</td>
                    <td>298347148-92</td>
                    <td>Recife Centro</td>
                    <td className="card-vermais">
                      <Button variant="sucess" className="botao-popup" onClick={() => setShow(true)}>
                        <i className="bi bi-plus-square-fill" />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

export default Consultar;
