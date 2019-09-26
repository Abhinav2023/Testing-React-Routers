import React from 'react';
import { BrowserRouter, Route,Switch,Link,NavLink } from 'react-router-dom';
const Header=()=>(
    <div>
        <h1>PortFolio</h1>
        This Is my PortFolio Header
        <NavLink to="/" activeClassName="id-active" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="id-active" exact={true}>PortFolio</NavLink>
        <NavLink to="/contact" activeClassName="id-active">Contact</NavLink>
  </div>
);
export default Header;