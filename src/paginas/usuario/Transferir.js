import React from "react";
import "../../App.css";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { Form, Card } from "react-bootstrap";
import unidades from "../../utils/unidades.json";

function Transferir() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    if (data) {
      api.put(`atualizarAcolhido/${data.matricula}`, {
        ...data,
      })
      alert('Transferido com sucesso!!');
    } else {
      alert('Houve algum erro no sistema, tente novamente.');
    }

  };

  return (
    <>
      <Card>
        <Card.Header className="card-header" as="h4">
          <span>Transferência</span>
        </Card.Header>
        <Card.Body className="card-body">
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} id="form">
              <input
                className="form-control campo-transferir"
                type="text"
                placeholder="Matrícula"
                id="consulta-matricula"
                name="consulta-matricula"
                {...register("matricula")}
              />
              <Form.Select className="campo-transferir" {...register("unidadeDeOrigem")}>
                <option disabled selected> --- Selecione a Unidade de Destino --- </option>
                {unidades.map(item =>
                  <option key={item.key} value={item.valor}>{item.unidade}</option>)
                }
              </Form.Select>
              <button class="submit-btn" type="submit">Transferir</button>
            </form>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Transferir;
