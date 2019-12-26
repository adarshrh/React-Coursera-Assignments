import React from 'react';
import logo from './logo.svg';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = { dishes: DISHES };
    }
render() {
  return (
    <div>
      <Navbar dark color="secondary">
      <div className="container">
      <NavbarBrand href="/">Home
      </NavbarBrand>
      <NavbarBrand href="/">Stocks
      </NavbarBrand>
      <NavbarBrand href="/">Register
      </NavbarBrand>
      <NavbarBrand href="/">Login
      </NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes={ this.state.dishes } />
    </div>
  );
 }

}
    

export default App;
