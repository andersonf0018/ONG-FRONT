import React from "react";
import "../../App.css";

import { Card } from "react-bootstrap";

function Desligamento() {
  return (
    <>
      <Card>
        <Card.Header className="card-header" as="h4">
          <div className="row">
            <div className="col-6">
              <span>Desligamento</span>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="card-body">
          <form className="formulario">
            <div className="container">
              <div className="row">

              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Desligamento;
