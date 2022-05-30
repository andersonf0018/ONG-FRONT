import React, { useState, render } from "react";
import { Form, Card, FormCheck } from "react-bootstrap";
import validator from "validator";
import "../App.css";


const StepOne = ({ nextStep, handleFormData, values}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [error, setError] = useState(false);
  
  const [medicamentos, setMedicamentos] = useState(false);
  const [doenca, setDoenca] = useState(false);
  const [alergia, setAlergia] = useState(false);
  const [psic, setPsic] = useState(false);
  const [processo, setProcesso] = useState(false);
  const [beneficios, setBeneficios] = useState(false);
  const [igreja, setIgreja] = useState(false);
  const [recuperar, setRecuperar] = useState(false);
  const [deficiencia, setDeficiencia] = useState(false);
  
  const medicamentosChange = (medicamentos) => {
    setMedicamentos(medicamentos);
  }
  const doencaChange = (doenca) => {
    setDoenca(doenca);
  }
  const alergiaChange = (alergia) => {
    setAlergia(alergia);
  }
  const psicChange = (psic) => {
    setPsic(psic);
  }
  const processoChange = (processo) => {
    setProcesso(processo);
  }
  const beneficiosChange = (beneficios) => {
    setBeneficios(beneficios);
  }
  const igrejaChange = (igreja) => {
    setIgreja(igreja);
  }
  const recuperaChange = (recuperar) => {
    setRecuperar(recuperar);
  }
  const deficienciaChange = (deficiencia) => {
    setDeficiencia(deficiencia);
  }

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card>
      <Card.Header className="card-header" as="h4">Informações Gerais</Card.Header>
        <Card.Body className="card-body">
          <Form className="formulario" onSubmit={submitFormData}>
            <Form.Group className="multistep-categorias">
              <p>
                Possui Filhos(as)?
                <FormCheck label="Sim" type="radio" className="radio-check" name="checkbox-filhos"/>
                <FormCheck label="Não" type="radio" className="radio-check" name="checkbox-filhos"/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group>
              <p>
                Está em situação de Rua?
                <FormCheck label="Sim" type="radio" name="checkbox-rua"/>
                <FormCheck label="Não" type="radio" name="checkbox-rua"/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group>
              <p className="pesquisa">A quanto tempo vive em situação de Rua?</p>
              <Form.Select className="campo-pesquisa">
                <option value="6-meses">
                menos de 6 meses
                </option>
                <option value="1-ano">
                menos de 1 ano
                </option>
                <option value="2-ano">
                menos de 2 anos
                </option>
                <option value="3-ano">
                menos de 3 anos
                </option>
                <option value="4-ano">
                menos de 4 anos
                </option>
                <option value="5-ano">
                menos de 5 anos
                </option>
                <option value="maior-ano">
                5 anos ou mais
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
            <p className="pesquisa">Tempo de Drogadição:</p>
              <Form.Select className="campo-pesquisa">
                <option value="6-meses">
                menos de 6 meses
                </option>
                <option value="1-ano">
                menos de 1 ano
                </option>
                <option value="2-ano">
                menos de 2 anos
                </option>
                <option value="3-ano">
                menos de 3 anos
                </option>
                <option value="4-ano">
                menos de 4 anos
                </option>
                <option value="5-ano">
                menos de 5 anos
                </option>
                <option value="maior-ano">
                5 anos ou mais
                </option>
              </Form.Select>
            </Form.Group>
            <p className="pesquisa">Tipos de drogas que faz uso?</p>
            <Form.Select className="campo-pesquisa">
              <option value="bebida-alcoolica">
              Bebidas alcóolicas
              </option>
              <option value="tabaco">
              Tabaco
              </option>
              <option value="medicamento">
              Medicamentos
              </option>
              <option value="maconha">
              Maconha
              </option>
              <option value="cocaina">
              Cocaína
              </option>
              <option value="crack">
              Crack
              </option>
              <option value="solventes">
              Solventes
              </option>
              <option value="lsd">
              LSD
              </option>
              <option value="ecstasy">
              Ecstasy
              </option>
              <option value="injetaveis">
              Drogas Injetaveis
              </option>
              <option value="outros">
              Outros (as)
              </option>
            </Form.Select>
            <Form.Group>
              <p>
                Faz uso de algum medicamento?
                <FormCheck 
                label="Sim" 
                type="radio" 
                className="radio-check" 
                name="checkbox-meds"
                onClick={(e) => medicamentosChange(true)}/>
                <FormCheck 
                label="Não" 
                type="radio" 
                className="radio-check" 
                name="checkbox-meds"
                onClick={(e) => medicamentosChange(false)}/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            {medicamentos === true &&
              <Form.Group>
                <Form.Control
                type="text"
                placeholder="Quais?"
                className="campo-pesquisa"/>
              </Form.Group>
            }
            <Form.Group>
              <p>
                Acometido por alguma(s) doença(s) que requer cuidados?
                <FormCheck 
                label="Sim" 
                type="radio" 
                className="radio-check" 
                name="checkbox-doenca"
                onClick={(e) => doencaChange(true)}/>
                <FormCheck 
                label="Não" 
                type="radio" 
                className="radio-check"
                name="checkbox-doenca"
                onClick={(e) => doencaChange(false)}/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            {doenca === true &&
              <Form.Group>
                <Form.Control
                type="text"
                placeholder="Qual?"
                className="campo-pesquisa"/>
              </Form.Group>
            }
            <Form.Group>
              <p>
                Alergia(s)?
                <FormCheck 
                label="Sim" 
                type="radio" 
                className="radio-check" 
                name="checkbox-alergia"
                onClick={(e) => alergiaChange(true)}/>
                <FormCheck 
                label="Não" 
                type="radio" 
                className="radio-check"
                name="checkbox-alergia"
                onClick={(e) => alergiaChange(false)}/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            {alergia === true &&
              <Form.Group>
                <Form.Control
                type="text"
                placeholder="Quais?"
                className="campo-pesquisa"
                />
              </Form.Group>
            }
            <Form.Group>
              <p>
                Faz acompanhamento psiquiátrico?
                <FormCheck 
                label="Sim" 
                type="radio" 
                className="radio-check"
                name="checkbox-psic"
                onClick={(e) => psicChange(true)}/>
                <FormCheck 
                label="Não" 
                type="radio" 
                className="radio-check"
                name="checkbox-psic"
                onClick={(e) => psicChange(false)}/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            {psic === true &&
              <Form.Group>
                <Form.Control
                type="text"
                placeholder="Onde?"
                className="campo-pesquisa"
                />
              </Form.Group>
            }
            </Form.Group>
            <Form.Group>
              <p>
                Responde a algum processo?
                <FormCheck 
                label="Sim" 
                type="radio" 
                className="radio-check"
                name="checkbox-processo"
                onClick={(e) => processoChange(true)}/>
                <FormCheck 
                label="Não" 
                type="radio" 
                className="radio-check"
                name="checkbox-processo"
                onClick={(e) => processoChange(false)}/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            {processo === true &&
              <Form.Group>
                <Form.Control
                type="text"
                placeholder="Em caso de Sim, Qual o número?"
                className="campo-pesquisa"/>
              </Form.Group>
            }
            <Form.Group>
              <p>
                Recebe algum benefício?
                <FormCheck 
                label="Sim" 
                type="radio" 
                className="radio-check"
                name="checkbox-beneficio"
                onClick={(e) => beneficiosChange(true)}/>
                <FormCheck 
                label="Não" 
                type="radio" 
                className="radio-check"
                name="checkbox-beneficio"
                onClick={(e) => beneficiosChange(false)}/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            {beneficios === true &&
              <Form.Group>
                <Form.Control
                type="text"
                placeholder="Em caso de Sim, Quais?"
                className="campo-pesquisa"/>
                <Form.Control
                type="number"
                placeholder="Qual o valor?"
                className="campo-pesquisa"/>
              </Form.Group>
            }
            <p className="pesquisa">Qual sua religião?</p>
            <Form.Select className="campo-pesquisa">
              <option value="protestantismo">Protestantismo</option>
              <option value="catolicismo">Catolicismo</option>
              <option value="espiritismo">Espiritismo</option>
              <option value="umbanda">Umbanda</option>
              <option value="cadomblé">Cadomblé</option>
              <option value="sem-religiao">Sem religião</option>
              <option value="outra">Outra</option>
            </Form.Select>
            <Form.Group>
              <p>
                Já fez parte da igreja evangélica?
                <FormCheck 
                label="Sim" 
                type="radio" 
                className="radio-check"
                name="checkbox-igreja"
                onClick={(e) => igrejaChange(true)}/>
                <FormCheck 
                label="Não" 
                type="radio" 
                className="radio-check"
                name="checkbox-igreja"
                onClick={(e) => igrejaChange(false)}/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
              {igreja === true &&
              <Form.Group>
                <Form.Control
                type="text"
                placeholder="Qual?"
                className="campo-pesquisa"/>
              </Form.Group>
            }
            </Form.Group>
            <Form.Group>
              <p>
                Já foi batizado?
                <FormCheck 
                label="Sim" 
                type="radio" 
                className="radio-check"
                name="checkbox-batismo"/>
                <FormCheck 
                label="Não" 
                type="radio" 
                className="radio-check" 
                name="checkbox-batismo"/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group>
              <p>
                Já esteve em casa de recuperação?
                <FormCheck 
                label="Sim" 
                type="radio" 
                className="radio-check"
                name="checkbox-recuperar"
                onClick={(e) => recuperaChange(true)}/>
                <FormCheck 
                label="Não" 
                type="radio" 
                className="radio-check"
                name="checkbox-recuperar"
                onClick={(e) => recuperaChange(false)}/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            {recuperar === true &&
              <Form.Group>
                <Form.Control
                type="text"
                placeholder="Qual o tempo de acolhimento?"
                className="campo-pesquisa"/>
                <Form.Control
                type="text"
                placeholder="Por que saiu?"
                className="campo-pesquisa"/>
              </Form.Group>
            }
            <Form.Group>
              <p>
                Já foi acolhido pela Cristolândia?
                <FormCheck 
                label="Sim" 
                type="radio" 
                className="radio-check"
                name="checkbox-acolhido"/>
                <FormCheck 
                label="Não" 
                type="radio" 
                className="radio-check"
                name="checkbox-acolhido"/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group>
              <p>
                Apresenta algum tipo de deficiência?
                <FormCheck 
                label="Sim" 
                type="radio" 
                className="radio-check"
                name="checkbox-deficiencia"
                onClick={(e) => deficienciaChange(true)}/>
                <FormCheck 
                label="Não" 
                type="radio" 
                className="radio-check"
                name="checkbox-deficiencia"
                onClick={(e) => deficienciaChange(false)}/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            {deficiencia === true &&
              <Form.Group>
                <Form.Control
                type="text"
                placeholder="Qual?"
                className="campo-pesquisa"/>
              </Form.Group>
            }
            <Form.Group>
              <p>
                Teria problema em apresentar antecedentes criminais?
                <FormCheck 
                label="Sim" 
                type="radio" 
                className="radio-check"
                name="checkbox-antecedentes"/>
                <FormCheck 
                label="Não" 
                type="radio" 
                className="radio-check"
                name="checkbox-antecedentes"/>
              </p>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  É necessário que você preencha esse campo
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="O que gosta de fazer nas horas vagas?"/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Considerações de atendimento"/>
            </Form.Group>
            <Form.Group>
              <p className="pesquisa">Documentos Apresentados:</p>
              <FormCheck label="Identidade"/>
              <FormCheck label="CPF"/>
              <FormCheck label="Carteira de Trabalho"/>
              <FormCheck label="Cartão PIS"/>
              <FormCheck label="CNH"/>
              <FormCheck label="Certidão de Nascimento"/>
              <FormCheck label="Título de Eleitor"/>
              <FormCheck label="Reservista"/>
              <FormCheck label="Cartão SUS"/>
            </Form.Group>
            <button className="submit-btn" onClick={handleShow}>
              Próxima etapa
            </button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;