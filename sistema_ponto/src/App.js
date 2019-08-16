import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';

class App extends Component {
  constructor(props){
    super(props);

    this.showUser = this.showUser.bind(this);
    
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    let response = await fetch('http://b1a9c387.ngrok.io  /users');
    let json = await response.json();
    this.setState({ users: json });
  }

  showUser(){
    alert('user');
  }

  render() {
    return (
      <div className="center_div">
        <h1>Zuppers</h1>
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
              this.state.users.map(function(user){                
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
