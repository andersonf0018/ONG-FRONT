import React, { useState, useEffect } from "react";
import "../../App.css";
import api from "../../services/api";

import { Table, Card, Modal, Button, InputGroup, Form } from "react-bootstrap";
import { useTheme } from "@emotion/react";

function Colaboradores() {
  const [colaboradores, setColaboradores] = useState([]);

  //Modal Cadastro
  const [modal, setModal] = useState(false);
  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  //Modal Mudar senha
  const [modalSenha, setModalSenha] = useState(false);
  const handleCloseSenha = () => setModalSenha(false);
  const handleShowSenha = () => setModalSenha(true);

  //Cadastro
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  //Mudar senha
  const [mudandoAtualmente, setMudandoAtualmente] = useState("");
  const [novaSenha, setNovaSenha] = useState("");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const registrar = () => {
    api.post("cadastrarAcesso", {
      nomeCompleto: nome,
      login: matricula,
      counter: senha,
      usuario: "voluntário"
    }).then((response) => {
      console.log(response);
    });
  };

  const apagar = (loginApagar) => {
    if (window.confirm("Tem certeza que deseja apagar esse voluntário?")) {
      api.delete("deletarCadastro", {
        login: loginApagar
      }).then((response) => {
        console.log(response);
      })
    }
  }

  const mudarSenha = (loginMudar) => {
    api.put(`atualizarSenha/${loginMudar}`, {
      counter: novaSenha
    }).then((response) => {
      console.log(response);
    })
  }

  const abrirMudarSenha = (loginMudar) => {
    setModalSenha(true);
    setMudandoAtualmente(loginMudar);
    console.log(mudandoAtualmente);
  }

  useEffect(() => {
    api.get("buscarTodosOsCadastros").then(({ data }) => {
      setColaboradores(data);
    }).catch(error => console.log(error));
  }, [colaboradores]);


  return (
    <>
      <Card>
        <Card.Header className="card-header" as="h4">
          <div className="row">
            <div className="col-7">
              <div className="row">
                <span className="col-6">Colaboradores</span>
              </div>
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-10 offset-2">
                  <button className="horizontal-btn" onClick={handleShow}><i class="bi bi-plus-circle"></i> Adicionar novo colaborador</button>
                </div>
              </div>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="card-body">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Matrícula</th>
                <th>Nome Completo</th>
                <th>Atribuição</th>
              </tr>
            </thead>
            <tbody>
              {colaboradores.map(colaborador => {
                return (
                  <tr>
                    <td className="card-info">{colaborador.login}</td>
                    <td className="card-info">{colaborador.nomeCompleto}</td>
                    <td className="card-info">{colaborador.usuario}</td>
                    <td className="card-vermais">
                      <Button variant="warning" className="botao-mudar-senha" onClick={() => abrirMudarSenha(colaborador.login)}>
                        <i class="bi bi-key"></i>
                      </Button>
                      <Button variant="danger" className="botao-apagar" onClick={() => apagar(colaborador.usuario)}>
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
      <Modal className="modal-insert" show={modal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Novo Colaborador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-create">
            <Form.Group className="mb-3" controlId="formNomeCompleto">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome completo" onChange={(e) => {
                setNome(e.target.value);
              }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMatricula">
              <Form.Label>Matrícula</Form.Label>
              <Form.Control type="text" placeholder="Digite a matrícula" onChange={(e) => {
                setMatricula(e.target.value);
              }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSenha">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite a senha" onChange={(e) => {
                setSenha(e.target.value);
              }} />
            </Form.Group>
            <Button variant="primary" onClick={registrar}>
              Cadastrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal className="modal-insert" show={modalSenha} onHide={handleCloseSenha} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mudança de senha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-create">
            <Form.Group className="mb-3" controlId="formNovaSenha">
              <Form.Label>Nova Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite a nova senha" onChange={(e) => {
                setNovaSenha(e.target.value);
              }} />
            </Form.Group>
            <Button variant="primary" onClick={() => mudarSenha(mudandoAtualmente)}>
              Mudar senha
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Colaboradores;
