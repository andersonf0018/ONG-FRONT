import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../App.css";
import api from "../../services/api";

import { Card, Form, FormCheck, FormControl } from "react-bootstrap";

function Anamnese() {
    return (
        <Card>
            <Card.Header className="card-header" as="h4">
                <div className="row">
                    <div className="col-6">
                        <span>Anamnese</span>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Form>
                    <h5>Identificação</h5>
                    <Form.Control placeholder="Nome" className="form-control campo-transferir"/>       
                    <Form.Control placeholder="Data de nascimento" className="form-control campo-transferir"/>
                    <Form.Control placeholder="Data de chegada" className="form-control campo-transferir"/>  
                    <Form.Control placeholder="Data de atendimento" className="form-control campo-transferir"/>
                    <h5>Situação de moradia</h5>
                    //Ver com Anderson
                    <Form.Group className="mb-3">
                        <p>Aspectos cognitivos comportamentais observados:
                        <Form.Control as="textarea" rows={3} placeholder="Digite Aqui"/>
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <p>Qual sua opinião quanto a sua situação?
                        <Form.Control as="textarea" rows={3} placeholder="Digite Aqui"/>
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <p>Considera-se dependente químico?
                        <Form.Control as="textarea" rows={3} placeholder="Digite Aqui"/>
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <p>Composição familiar:
                        <Form.Control as="textarea" rows={3} placeholder="Digite Aqui"/>
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <p>Descrição das relações parentais:
                        <Form.Control as="textarea" rows={3} placeholder="Digite Aqui"/>
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <p>Quais as condições de relacionamento dos membros de sua família com você?
                        <Form.Control as="textarea" rows={3} placeholder="Digite Aqui"/>
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <p>Qual o interesse manifestado e compromissos assumidos pela sua família de origem para o restabelecimento da convivência familiar?
                        <Form.Control as="textarea" rows={3} placeholder="Digite Aqui"/>
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <p>Relato de como e porque passou a usar drogas:
                        <Form.Control as="textarea" rows={3} placeholder="Digite Aqui"/>
                        </p>
                        <Form.Group className="mb-3">
                        <p>Informações Adicionais:
                        <Form.Control as="textarea" rows={3} placeholder="Digite Aqui"/>
                        </p>
                    </Form.Group>
                    <Form.Check
                    label="Foram passadas orientações quanto aos riscos à saúde física e mental de acordo com o tipo de droga utilizada."/>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}
export default Anamnese;