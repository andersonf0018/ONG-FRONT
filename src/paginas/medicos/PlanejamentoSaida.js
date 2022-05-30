import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../App.css";
import api from "../../services/api";

import { Card, Form, FormCheck } from "react-bootstrap";


function Saida() {

    const [renda, setRenda] = useState(false);

    const rendaChange = (renda) => {
        setRenda(renda);
    }
    return (
        <Card>
            <Card.Header className="card-header" as="h4">
                <div className="row">
                    <div className="col-6">
                        <span>Planejamento de Saída</span>
                    </div>
                </div>
            </Card.Header>
            <Card.Body className="card-body">
                <Form className="formulario">
                    <Form.Group className="multistep-categorias">
                        <p>Possui renda própria?
                            <FormCheck
                                label="Sim"
                                type="radio"
                                className="radio-check"
                                name="saida-renda"
                                onClick={(e) => rendaChange(true)} />
                            <FormCheck
                                label="Não"
                                type="radio"
                                className="radio-check"
                                name="saida-renda"
                                onClick={(e) => rendaChange(false)} />
                        </p>
                    </Form.Group>
                    {renda === true &&
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Que tipo?"
                                className="campo-pesquisa" />
                        </Form.Group>
                    }
                    <div className="container">
                        <Form.Group className="mb-3">
                            <p>Trájetoria de Trabalho (histórico de empregos e experiência profissional)</p>
                            <Form.Control as="textarea" rows={3} placeholder="Trájetoria de Trabalho (histórico de empregos e experiência profissional)"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <p>Proposta de geração de renda e Organização financeira</p>
                            <Form.Control as="textarea" rows={3} placeholder="Proposta de geração de renda e Organização financeira" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <p>Proposta de moradia (Descrição de moradia anterior/Perspectiva)</p>
                            <Form.Control as="textarea" rows={3} placeholder="Proposta de moradia (Descrição de moradia anterior/Perspectiva)" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <p>Objetivos do acolhido</p>
                            <Form.Control as="textarea" rows={3} placeholder="Objetivos do acolhido" />
                        </Form.Group>
                    </div>
                </Form>
                <p className="pesquisa">Tipo de saída:</p>
                <Form.Select className="campo-pesquisa">
                    <option value="administrativo">Saída Administrativa</option>
                    <option value="abandono">Abandono</option>
                    <option value="conclusao">Conclusão do programa de ressocialização</option>
                    <option value="outra">Outra</option>
                </Form.Select>
            </Card.Body>
        </Card>
    );
}

export default Saida;