import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cadastro from './Cadastro';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/cadastro" component={Cadastro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
  );
