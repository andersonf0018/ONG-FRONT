import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../App.css";
import api from "../../services/api";

import { Card, Form, FormCheck } from "react-bootstrap";

function PIA() {
    const [dependencia, setDependencia] = useState(false);
    const [doenca, setDoenca] = useState(false);
    const [antecedentes, setAntecedentes] = useState(false);
    const [juridico, setJuridico] = useState(false);
    
    
    const dependenciaChange = (dependencia) => {
        setDependencia(dependencia);
    }
    const doencaChange = (doenca) => {
        setDoenca(doenca);
    }
    const antecedentesChange = (antecedentes) => {
        setAntecedentes(antecedentes);
    }
    const juridicoChange = (juridico) => {
        setJuridico(juridico);
    }
    return (
        <Card>
            <Card.Header className="card-header" as="h4">
                <div className="row">
                    <div className="col-6">
                        <span>PIA</span>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <div className="row">
                    <input
                        className="form-control campo-cadastro-usuario col"
                        type="text"
                        placeholder="Contatos de Emergência"
                        id="campo-cadastro-contato-emergencia"
                        name="campo-cadastro-contato-emergencia"
                    />
                    <input
                        className="form-control campo-cadastro-usuario col"
                        type="text"
                        placeholder="Contatos de Emergência"
                        id="campo-cadastro-contato-emergencia"
                        name="campo-cadastro-contato-emergencia"
                    />
                </div>
                <Form>
                    <Form.Group className="mb-3">
                        <p>Evolução do vínculo</p>
                        <Form.Control as="textarea" rows={3} placeholder="Evolução do vínculo" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <p>Proposta de reintegração familiar</p>
                        <Form.Control as="textarea" rows={3} placeholder="Proposta de reintegração familiar" />
                    </Form.Group>
                    <Form.Group>
                        <p>
                            Antecedentes de tratamento para dependência química?
                            <FormCheck
                                label="Sim"
                                type="radio"
                                className="radio-check"
                                name="dependencia"
                                onClick={(e) => dependenciaChange(true)} />
                            <FormCheck
                                label="Não"
                                type="radio"
                                className="radio-check"
                                name="dependencia"
                                onClick={(e) => dependenciaChange(false)} />
                        </p>
                    </Form.Group>
                    {dependencia === true &&
                        <Form.Group>
                            <p className="pesquisa">Qual?</p>
                            <Form.Select className="campo-pesquisa">
                                <option value="danos">Redução de Danos</option>
                                <option value="abstinência">Abstinência</option>
                                <option value="alcoolicos">Álcoolicos Anônimos</option>
                                <option value="caps">CAPS</option>
                                <option value="comunidade">Comunidade Terapêutica</option>
                                <option value="internacao">Internação</option>
                                <option value="outra">Outra</option>
                            </Form.Select>
                        </Form.Group>
                    }
                    //Ver com Anderson a exibição de possui alguma doença e usa alguma medicação e possui antecedentes
                    <Form.Group>
                        <p>
                            Possui Antecedentes criminais?
                            <FormCheck
                                label="Sim"
                                type="radio"
                                className="radio-check"
                                name="antecedentes"
                                onClick={(e) => antecedentesChange(true)} />
                            <FormCheck
                                label="Não"
                                type="radio"
                                className="radio-check"
                                name="antecedentes"
                                onClick={(e) => antecedentesChange(false)} />
                        </p>
                    </Form.Group>
                    {antecedentes === true &&
                        <Form.Group>
                            <Form.Control
                            placeholder="Quais?"
                            className="campo-pesquisa"/>
                        </Form.Group>
                    }
                    <Form.Group>
                        <p>Necessita apoio juridico?
                            <Form.Check
                            label="Sim"
                            className="radio-check"
                            name="juridico"
                            type="radio"
                            onClick={(e) => juridicoChange(true)} />
                            <Form.Check
                            label="Não"
                            className="radio-check"
                            name="juridico"
                            type="radio"
                            onClick={(e) => juridicoChange(false)}/>
                        </p>
                    </Form.Group>
                    {juridico === true &&
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" rows={3} placeholder="Especifique"/>
                        </Form.Group>
                    }
                </Form>
            </Card.Body>
        </Card>
    );
}
export default PIA;