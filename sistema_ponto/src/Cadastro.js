import React, { Component } from 'react';
import InputMask from 'react-input-mask';

class Cadastro extends Component {
  render() {
    return (
      <div className="body"> 
        <h1>Cadastro </h1>

        <form>
            <div>
                <label>Nome: </label> <input type="text"></input>
            </div>
            <div>
                <label>CPF: </label> <InputMask mask="999.999.999-99" maskChar=" " />
            </div>
            <div>
                <label>Email: </label> <input type="email"></input>
            </div>
            <div>
                <label>POD: </label> <input type="text"></input>
            </div>
        </form>
      </div>
    );
  }
}

export default Cadastro;
