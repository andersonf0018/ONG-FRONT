import React, { useState, useEffect } from "react";
import "../../App.css";
import api from "../../services/api";
import unidades from "../../utils/unidades.json";
import { Table, Card, Modal, Button, Form } from "react-bootstrap";

function Acolhidos() {
  const [show, setShow] = useState(false);
  const [acolhidos, setAcolhidos] = useState([]);
  const [acolhidoAtual, setAcolhidoAtual] = useState([]);

  useEffect(() => {
    api.get("todosOsAcolhidos").then(({ data }) => {
      setAcolhidos(data);
    }).catch(error => console.log(error));
  }, []);


  const apagar = (matriculaApagar) => {
    if (window.confirm("Tem certeza que deseja apagar esse acolhido?")) {
      api.delete("deletarAcolhido", {
        matricula: matriculaApagar
      }).then((response) => {
        console.log(response);
      })
    }
  }


  let acolhidoModal = acolhidos.filter(acolhido => acolhido.matricula == acolhidoAtual)

  const modalInfo = (matricula) => {
    setAcolhidoAtual(matricula);
    setShow(true)
  }

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
              <p>Data de entrada: <span>{acolhidoModal[0] ? acolhidoModal[0].dataDeSaida : ""}</span></p>
            </div>
            <div className="row falso-form">
              <p>Número de internações: <span>{acolhidoModal[0] ? acolhidoModal[0].numeroDeInternacoes : ""}</span></p>
            </div>
            <div className="row falso-form">
              <p>Unidade de origem: <span>{acolhidoModal[0] ? acolhidoModal[0].unidadeDeOrigem : ""}</span></p>
            </div>
            <div className="row falso-form">
              <p>Contatos de emergência: <span>{acolhidoModal[0] ? acolhidoModal[0].contatosDeEmergencia.numero1 : ""} / {acolhidoModal[0] ? acolhidoModal[0].contatosDeEmergencia.numero2 : ""} </span></p>
            </div>
            <div className="row falso-form">
              <p>Usuário que realizou o cadastramento: <span><i className="modal-texto-desabilitado">Não disponível</i></span></p>
            </div>
            <div className="row falso-form">
              <p>Previsão de Saída: <span>{acolhidoModal[0] ? acolhidoModal[0].dataDeSaida : ""} </span></p>
            </div>
            <div className="row falso-form">
              <p>Data de saída: <span>{acolhidoModal[0] ? acolhidoModal[0].dataDeSaida : ""}</span></p>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Card>
        <Card.Header className="card-header" as="h4">
          <div className="row">
            <div className="col-7">
              <div className="row">
                <span className="col-6">Acolhidos</span>
                <div className="col-6">
                  <Form.Select onChange={console.log("bora bill")}> 
                    <option disabled selected> --- Selecione a Unidade --- </option>
                    {unidades.map(item =>
                      <option key={item.key} value={item.valor} >{item.unidade}</option>)
                    }
                  </Form.Select>
                </div>
              </div>
            </div>
            <div className="col-5">
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
                <th>Matricula</th>
                <th>Nome</th>
                <th>Unidade</th>
              </tr>
            </thead>
            <tbody>
              {acolhidos.map(acolhido => {
                return (
                  <tr>
                    <td className="card-info">{acolhido.matricula}</td>
                    <td className="card-info">{acolhido.nomeCompleto}</td>
                    <td className="card-info">{acolhido.unidadeDeOrigem}</td>
                    <td className="card-vermais">
                      <Button variant="sucess" className="botao-popup" onClick={() => modalInfo(acolhido.matricula)}>
                        <i className="bi bi-plus-square-fill" />
                      </Button>
                      <Button variant="danger" className="botao-apagar" onClick={() => apagar(acolhido.matricula)}>
                        <i class="bi bi-trash"></i>
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

export default Acolhidos;
