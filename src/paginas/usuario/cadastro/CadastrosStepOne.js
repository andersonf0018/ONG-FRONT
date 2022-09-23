import React, { useState, useEffect } from "react";
import "../../../App";
import api from "../../../services/api";
import { Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Cadastros() {
    const { handleSubmit, register } = useForm();
    function FormData(data) {
        console.log(data);

        api.post("http://localhost:8080/library/create", {
            name: data,
            ...data,
        }).catch((err) => {
            alert("Ops! Something Wrong! \n" + err);
        });

        alert("Registered!");
    }

    return (
        <>
            <Card>
                <Card.Header className="card-header" as="h4">
                    Cadastro
                </Card.Header>
                <Card.Body className="card-body">
                    <form className="formulario" onSubmit={handleSubmit(FormData)} id="form">
                        <div className="container">
                            <div className="row">
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Nome completo"
                                    id="campo-cadastro-nome"
                                    name="nomeCompleto"
                                    {...register("nomeCompleto")}
                                />
                            </div>
                            <div className="row">
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Nome da mãe"
                                    id="campo-cadastro-nome-mae"
                                    name="nomeDaMae"
                                    {...register("nomeDaMae")}
                                />
                            </div>
                            <div className="row">
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Nome do pai"
                                    id="campo-cadastro-nome-pai"
                                    name="nomeDoPai"
                                    {...register("nomeDoPai")}
                                />
                            </div>
                            <div className="row">
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Naturalidade"
                                    id="campo-cadastro-naturalidade"
                                    name="naturalidade"
                                    {...register("naturalidade")}
                                />
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Nacionalidade"
                                    id="campo-cadastro-nacionalidade"
                                    name="nacionalidade"
                                    {...register("nacionalidade")}
                                />
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="number"
                                    placeholder="Idade"
                                    id="campo-cadastro-idade"
                                    name="idade"
                                    min="0"
                                    max="150"
                                    {...register("idade")}
                                />
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    placeholder="Data de Nascimento"
                                    type="date"
                                    id="campo-cadastro-data-nascimento"
                                    name="dataDeNascimento"
                                    {...register("dataDeNascimento")}
                                />
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <Form.Select>
                                        <option>Estado Cívil</option>
                                        <option value="solteiro">Solteiro(a)</option>
                                        <option value="casado">Casado(a)</option>
                                        <option value="divorciado">Divorciado(a)</option>
                                        <option value="viuvo">Viúvo(a)</option>
                                    </Form.Select>
                                    <input
                                        className="form-control campo-cadastro-estado-civil col"
                                        type="text"
                                        placeholder="Estado Cívil"
                                        id="campo-cadastro-estado-civil"
                                        name="estadoCivil"
                                        {...register("name")}
                                    />
                                </div>
                                <div className="col mb-3">
                                    {/* <Form.Select>
                    <option>Raça</option>
                    <option value="Branco">Branco(a)</option>
                    <option value="Preto">Preto(a)</option>
                    <option value="Pardo">Pardo(a)</option>
                    <option value="Amarelo">Amarelo(a)</option>
                    <option value="Indigena">Indígena</option>
                    <option value="Não Informada">Não informada</option>
                  </Form.Select> */}
                                    <input
                                        className="form-control campo-cadastro-raca col"
                                        type="text"
                                        placeholder="Raça"
                                        id="campo-cadastro-raca"
                                        name="raca"
                                        {...register("name")}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Escolaridade"
                                    id="campo-cadastro-escolaridade"
                                    name="escolaridade"
                                    {...register("name")}
                                />
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Profissão"
                                    id="campo-cadastro-profissao"
                                    name="profissao"
                                    {...register("name")}
                                />
                            </div>
                            <div className="row">
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Contatos de Emergência"
                                    id="campo-cadastro-contato-emergencia"
                                    name="contatosDeEmergencia.numero1"
                                    {...register("name")}
                                />
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Contatos de Emergência"
                                    id="campo-cadastro-contato-emergencia"
                                    name="contatosDeEmergencia.numero2"
                                    {...register("name")}
                                />
                            </div>
                            <div className="row">
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="CPF"
                                    id="campo-cadastro-cpf"
                                    name="CPF"
                                    {...register("name")}
                                />
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Sexo"
                                    id="campo-cadastro-sexo"
                                    name="sexo"
                                    {...register("name")}
                                />
                            </div>
                            <div className="row">
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="RG"
                                    id="campo-cadastro-rg"
                                    name="RG"
                                    {...register("name")}
                                />
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Estado Emissor"
                                    id="campo-cadastro-estado-emissor"
                                    name="estadoEmissor"
                                    {...register("name")}
                                />
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="date"
                                    placeholder="Data de Emissão"
                                    id="campo-cadastro-emissao"
                                    name="dataDeEmissaoRG"
                                    {...register("name")}
                                />
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Orgão Emissor"
                                    id="campo-cadastro-orgao-emissor"
                                    name="orgaoEmissor"
                                    {...register("name")}
                                />
                            </div>
                            <div className="row">
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="CEP"
                                    id="campo-cadastro-cep"
                                    name="CEP"
                                    {...register("name")}
                                />
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Endereço"
                                    id="campo-cadastro-endereço"
                                    name="endereco"
                                    {...register("name")}
                                />
                            </div>
                            <div className="row">
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Estado"
                                    id="campo-cadastro-estado"
                                    name="estado"
                                    {...register("name")}
                                />
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Munícipio"
                                    id="campo-cadastro-municipio"
                                    name="municipio"
                                    {...register("name")}
                                />
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Bairro"
                                    id="campo-cadastro-bairro"
                                    name="bairro"
                                    {...register("name")}
                                />
                            </div>
                            <div className="row">
                                <input
                                    className="form-control campo-cadastro-usuario col"
                                    type="text"
                                    placeholder="Matricula"
                                    id="campo-cadastro-matricula"
                                    name="matricula"
                                    {...register("name")}
                                />
                            </div>
                            <div className="row">
                                <Form.Select className="form-control campo-cadastro-usuario col">
                                    <option>Unidade de Origem</option>
                                    <option value="unidade-recife-centro">Recife - Centro</option>
                                    <option value="unidade-recife-jardim-sp">Recife - Jardim São Paulo</option>
                                    <option value="unidade-paudalho">Paudalho</option>
                                    <option value="unidade-jaboatao">Jaboatão dos Guararapes</option>
                                </Form.Select>

                            </div>
                            <div className="row">
                                <button className="submit-btn">Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </>
    );
}

export default Cadastros;