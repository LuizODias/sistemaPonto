import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './App.css';
import './bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.showUser = this.showUser.bind(this);

    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    let response = await fetch('http://16eabd3d.ngrok.io/users');
    let json = await response.json();
    this.setState({ users: json });
  }

  showUser() {
    alert('user');
  }

  setRedirect = ()=>{
    this.setState({
      redirect: true
    })
  }

  renderRedirect = ()=>{
    if(this.state.redirect){
      return <Redirect to='/cadastro'/>
    }
  }

  render() {
    return (
      <div className="center_div">
        <div className="row">
          <div className="col">
            <h1>Zuppers</h1>
          </div>
          <div className="col">
            {this.renderRedirect()}
            <button onClick={this.setRedirect}>Cadastro</button>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>POD</th>
              <th>Email</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map(function (user) {
                return (
                  <tr key={user.cpf}>
                    <td>{user.nome}</td>
                    <td>{user.cpf}</td>
                    <td>{user.pod}</td>
                    <td>{user.email}</td>
                    <td>{user.telefone}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
