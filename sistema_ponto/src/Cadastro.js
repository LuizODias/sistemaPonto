import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import './App.css';
import './bootstrap.css';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setTelefone = this.setTelefone.bind(this);
        this.setCPF = this.setCPF.bind(this);
        this.setPOD = this.setPOD.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.validString = this.validString.bind(this);
        this.testaCPF = this.testaCPF.bind(this);

        this.state = {
            nome: '',
            email: '',
            telefone: '',
            cpf: '',
            pod: '',
        }
    }

    setNome(evento) {
        this.setState({ nome: evento.target.value });
    }

    setEmail(evento) {
        this.setState({ email: evento.target.value });
    }

    setTelefone(evento) {
        this.setState({ telefone: evento.target.value });
    }

    setCPF(evento) {
        this.setState({ cpf: evento.target.value });
    }

    setPOD(evento) {
        this.setState({ pod: evento.target.value });
    }

    registerUser(event) {
        event.preventDefault();
        // console.log(this.state.nome);
        if (
            !this.testaCPF(this.state.cpf) ||
            !this.validString(this.state.nome) ||
            !this.validString(this.state.email) ||
            !this.validString(this.state.telefone) ||
            !this.validString(this.state.cpf) ||
            !this.validString(this.state.pod)
        ) {
            console.log("alsjdflkjaskdj")
            return false;
        }

        console.log('Cadastro');
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                nome: this.state.nome,
                email: this.state.email,
                telefone: this.state.telefone,
                cpf: this.state.cpf,
                pod: this.state.pod
            }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        fetch('http://3d326748.ngrok.io/users', requestInfo)
            .then(response => {
                if (response.ok) {
                    this.setState({
                        nome: '',
                        email: '',
                        telefone: '',
                        cpf: '',
                        pod: ''
                    });
                    alert('Usuário foi cadastrado com sucesso!');
                    return response.json();
                }
                else {
                    this.setState({
                        nome: '',
                        email: '',
                        telefone: '',
                        cpf: '',
                        pod: ''
                    });
                    alert('Não foi possível cadastrar o usuário\nErro: "' + response.statusText + '"');
                }
            })
            .then(token => { });
    }

    validString(string) {
        if (string === '' || string === null || string === undefined)
            return false;
        return true;
    }

    testaCPF(CPF) {
        var Soma = 0;
        var i = 0;
        var Resto;

        CPF = CPF.replace(/\D/g, '');

        if (CPF === "00000000000") {
            alert('CPF inválido!');
            return false;
        }

        for (i = 1; i <= 9; i++)
            Soma += parseInt(CPF.substring(i - 1, i), 10) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11))
            Resto = 0;

        if (Resto !== parseInt(CPF.substring(9, 10), 10)) {
            alert('CPF inválido!');
            return false;
        }

        Soma = 0;

        for (i = 1; i <= 10; i++)
            Soma += parseInt(CPF.substring(i - 1, i), 10) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11))
            Resto = 0;

        if (Resto !== parseInt(CPF.substring(10, 11), 10)) {
            alert('CPF inválido!');
            return false;
        }
        return true;
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {
        return (
            <Container className="center_div">
                <div id="container" className="container">
                    <div className="row text">
                        <div className="col-sm-6 offset-sm-3 text-center">
                            <h1>Cadastro </h1>
                            <div className="info-form">
                                <form className="form-inlin justify-content-center">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Nome" value={this.state.nome} onChange={this.setNome.bind(this)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email" value={this.state.email} onChange={this.setEmail.bind(this)} />
                                    </div>
                                    <div className="form-group">
                                        <InputMask mask="(99)99999-9999" maskChar=" " className="form-control" placeholder="Telefone" value={this.state.telefone} onChange={this.setTelefone.bind(this)} />
                                    </div>
                                    <div className="form-group">
                                        <InputMask mask="999.999.999-99" maskChar=" " className="form-control" placeholder="CPF" value={this.state.cpf} onChange={this.setCPF.bind(this)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="POD" value={this.state.pod} onChange={this.setPOD.bind(this)} />
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                {this.renderRedirect()}
                                                <button onClick={this.setRedirect} className="btn btn-danger">Voltar</button>
                                            </div>
                                            <div className="col-sm">
                                                <button onClick={this.registerUser} type="submit" className="btn btn-success ">Cadastrar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Cadastro;
