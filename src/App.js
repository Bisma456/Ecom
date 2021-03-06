import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home'
import { AddProducts } from './components/AddProducts';
import { Signup } from './components/Signup';
import { Login } from './components/Login';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/addproducts' component={AddProducts} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    )
    }
  }

export default App;


