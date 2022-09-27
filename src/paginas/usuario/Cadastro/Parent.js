import React, { Component } from 'react'
import Cadastros from './Cadastros'
import Regist from './Cadastros'
import CadastroStepTwo from './CadastroStepTwo'


export default class Parent extends Component {

    state = {
        step: 1,
        nomeCompleto: '',
        nomeDaMae: '',
        nomeDoPai: '',
        naturalidade: '',
        nacionalidade: '',
        idade: '',
        dataDeNascimento: '',
        estadoCivil: '',
        raca: '',
        escolaridade: '',
        profissao: '',
        CPF: '',
        sexo: '',
        RG: '',
        estadoEmissor: '',
        dataDeEmissaoRG: '',
        orgaoEmissor: '',
        CEP: '',
        endereco: '',
        estado: '',
        municipio: '',
        bairro: '',
        unidadeDeOrigem: '',
        numeroDeInternacoes: '',
        contatosDeEmergencia: {
            numero1: '',
            numero2: '',
        },
        dataDeSaida: '',
        matricula: '',
        possuiFilhos: '',
        situacaoDeRua: '',
        tempoDeRua: '',
        tempoDeDrogadicao: '',
        tiposDeDrogas: '',
        usaMedicamentos: '',
        doencasPrecisaCuidados: '',
        alergia: '',
        acompanhamentoPsiquiatrico: '',
        respondeProcesso: '',
        recebeBeneficio: '',
        religiao: '',
        igrejaEvangelica: '',
        batizado: '',
        casaDeRecuperacao: '',
        jaFoiAcolhido: '',
        deficiencia: '',
        antecedentesCriminais: '',
        fazNasHorasVagas: '',
        consideracoesDeAtendimento: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    backStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    render() {
        const { step } = this.state;
        const { nomeCompleto,
            nomeDaMae,
            nomeDoPai,
            naturalidade,
            nacionalidade,
            idade,
            dataDeNascimento,
            estadoCivil,
            raca,
            escolaridade,
            profissao,
            CPF,
            sexo,
            RG,
            estadoEmissor,
            dataDeEmissaoRG,
            orgaoEmissor,
            CEP,
            endereco,
            estado,
            municipio,
            bairro,
            unidadeDeOrigem,
            numeroDeInternacoes,
            contatosDeEmergencia: {
                numero1,
                numero2
            },
            dataDeSaida,
            matricula,
            possuiFilhos,
            situacaoDeRua,
            tempoDeRua,
            tempoDeDrogadicao,
            tiposDeDrogas,
            usaMedicamentos,
            doencasPrecisaCuidados,
            alergia,
            acompanhamentoPsiquiatrico,
            respondeProcesso,
            recebeBeneficio,
            religiao,
            igrejaEvangelica,
            batizado,
            casaDeRecuperacao,
            jaFoiAcolhido,
            deficiencia,
            antecedentesCriminais,
            fazNasHorasVagas,
            consideracoesDeAtendimento

        } = this.state;
        const values = {
            nomeCompleto,
            nomeDaMae,
            nomeDoPai,
            naturalidade,
            nacionalidade,
            idade,
            dataDeNascimento,
            estadoCivil,
            raca,
            escolaridade,
            profissao,
            CPF,
            sexo,
            RG,
            estadoEmissor,
            dataDeEmissaoRG,
            orgaoEmissor,
            CEP,
            endereco,
            estado,
            municipio,
            bairro,
            unidadeDeOrigem,
            numeroDeInternacoes,
            contatosDeEmergencia: {
                numero1,
                numero2
            },
            dataDeSaida,
            matricula,
            possuiFilhos,
            situacaoDeRua,
            tempoDeRua,
            tempoDeDrogadicao,
            tiposDeDrogas,
            usaMedicamentos,
            doencasPrecisaCuidados,
            alergia,
            acompanhamentoPsiquiatrico,
            respondeProcesso,
            recebeBeneficio,
            religiao,
            igrejaEvangelica,
            batizado,
            casaDeRecuperacao,
            jaFoiAcolhido,
            deficiencia,
            antecedentesCriminais,
            fazNasHorasVagas,
            consideracoesDeAtendimento
        }

        switch (step) {
            case 1:
                return (
                    <Cadastros
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <CadastroStepTwo
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            default:
        }
    }
}

export default Parent;