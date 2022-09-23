import { useState, useEffect } from "react";
import "../../App.css";
import api from "../../services/api";

import { Link, Redirect } from "react-router-dom";
import { Card, Table } from "react-bootstrap";

/*** GRÁFICOS***/
import { Bar, Doughnut } from "react-chartjs-2";

function Home() {
    const [acolhidos, setAcolhidos] = useState([]);

    useEffect(async () => {
        api.get("todosOsAcolhidos")
            .then(({ data }) => {
                setAcolhidos(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const dataMeses = {
        labels: [],
        datasets: [
            {
                label: "Número de cadastros",
                data: [65, 59, 80, 81, 56, 55, 40, 34, 57, 10, 19, 15],
                backgroundColor: [
                    "#6fbf83",
                    "#05976e",
                    "#076b58",
                    "#03a688",
                    "#6fbf83",
                    "#05976e",
                    "#076b58",
                    "#03a688",
                    "#6fbf83",
                    "#05976e",
                    "#076b58",
                    "#03a688",
                ],
                borderColor: [
                    "#6fbf83",
                    "#05976e",
                    "#076b58",
                    "#03a688",
                    "#6fbf83",
                    "#05976e",
                    "#076b58",
                    "#03a688",
                    "#6fbf83",
                    "#05976e",
                    "#076b58",
                    "#03a688",
                ],
                borderWidth: 1,
            },
        ],
    };


    let between18and30 = acolhidos.filter(acolhido => acolhido.idade >= 18 && acolhido.idade <= 30);
    let between31and50 = acolhidos.filter(acolhido => acolhido.idade >= 31 && acolhido.idade <= 50);
    let between51and74 = acolhidos.filter(acolhido => acolhido.idade >= 51 && acolhido.idade <= 74);
    let moreThan75 = acolhidos.filter(acolhido => acolhido.idade >= 75);


    const dataFaixaEtaria = {
        labels: ["18-30", "31-50", "51-74", "75+"],
        datasets: [
            {
                data: [between18and30.length, between31and50.length, between51and74.length, moreThan75.length],
                backgroundColor: ["#6fbf83", "#05976e", "#076b58", "#03a688"],
                hoverOffset: 5,
            },
        ],
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col box-info acolhidos-unidade">
                        <a href="#">
                            <h4>Acolhidos na unidade</h4>
                        </a>
                        <p>
                            <span className="box-info-numero">{acolhidos.length}</span> cadastro(s)
                        </p>
                    </div>
                    <div className="col box-info acolhidos-pendente">
                        <a href="#">
                            <h4>Acolhidos com documentação pendente</h4>
                        </a>
                        <p>
                            <span className="box-info-numero">0</span> cadastro(s)
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <Card className="box-ultimos-cadastrados">
                    <Card.Header className="card-header" as="h4">
                        <div className="row">
                            <div className="col-6">
                                <span>Últimos cadastros</span>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6 offset-6">
                                        <Link exact to="/cadastros">
                                            <button className="btn box-ultimos-cadastrados-btn-novo">
                                                <i className="bi bi-plus"></i> Novo cadastro
                                            </button>
                                        </Link>
                                    </div>
                                    {/* <div className="col-6">
                                        <input
                                            className="form-control consulta-matricula"
                                            type="text"
                                            placeholder="Pesquisar..."
                                            id="box-ultimos-cadastros-pesquisar"
                                            name="box-ultimos-cadastros-pesquisar"
                                        />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body className="card-body">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Matricula</th>
                                    <th>Nome</th>
                                    <th>Unidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {acolhidos.map((acolhido) => {
                                    return (
                                        <tr>
                                            <td className="card-info">{acolhido.matricula}</td>
                                            <td className="card-info">{acolhido.nomeCompleto}</td>
                                            <td className="card-info">{acolhido.unidadeDeOrigem}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
            <div className="container box-graficos">
                <div className="row">
                    <div className="col-6">
                        <Card>
                            <Card.Header className="card-header" as="h4">
                                <span>Faixa Etária</span>
                            </Card.Header>
                            <Card.Body className="card-body">
                                <Doughnut
                                    data={dataFaixaEtaria}
                                    options={{
                                        title: {
                                            display: true,
                                            text: "Average Rainfall per month",
                                            fontSize: 20,
                                        },
                                        legend: {
                                            display: true,
                                            position: "right",
                                        },
                                    }}
                                />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6">
                        <Card>
                            <Card.Header className="card-header" as="h4">
                                <span>Cadastros por mês (ano)</span>
                            </Card.Header>
                            <Card.Body className="card-body">
                                <Bar
                                    data={dataMeses}
                                    options={{
                                        title: {
                                            display: true,
                                            fontSize: 20,
                                        },
                                        legend: {
                                            display: true,
                                            position: "right",
                                        },
                                    }}
                                />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="container box-graficos">
                <div className="row">
                    <div className="col-6">
                        <Card>
                            <Card.Header className="card-header" as="h4">
                                <span>Quantitativo de usuários cadastrados</span>
                            </Card.Header>
                            <Card.Body className="card-body">
                                <Bar
                                    data={dataMeses}
                                    options={{
                                        title: {
                                            display: true,
                                            fontSize: 20,
                                        },
                                        legend: {
                                            display: true,
                                            position: "right",
                                        },
                                    }}
                                />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6">
                        <Card>
                            <Card.Header className="card-header" as="h4">
                                <span>Quantitativo de cadastros por unidade</span>
                            </Card.Header>
                            <Card.Body className="card-body">
                                <Bar
                                    data={dataMeses}
                                    options={{
                                        title: {
                                            display: true,
                                            fontSize: 20,
                                        },
                                        legend: {
                                            display: true,
                                            position: "right",
                                        },
                                    }}
                                />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
