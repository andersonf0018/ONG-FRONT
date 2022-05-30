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
      <Card>
        <Card.Header className="card-header" as="h4">
          <div className="row">
            <div className="col-6">
              <span>Financeiro</span>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-8">
                  <input
                    className="form-control consulta-matricula"
                    type="text"
                    placeholder="ID da transação"
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
        </Card.Body>
      </Card>
    </>
  );
}

export default Consultar;
