import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ModalConfimacao() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Deseja salvar as informações?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Depois que confimar as informações, alterações só seram realizadas mediante permissão prévia, quer mesmo prosseguir?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="Sucess">Salvar Alterações</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConfimacao;