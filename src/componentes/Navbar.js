import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

class NavBar extends React.Component{

    render(){
        return(
            <>
  <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Navbar.Brand href="home">Primera tarea: Taller de Integración</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="mr-auto">
    </ReactBootStrap.Nav>
    <ReactBootStrap.Form inline>
    <ReactBootStrap.FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      <ReactBootStrap.Button variant="outline-info">Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
  </ReactBootStrap.Navbar>

 
</>

        );
    }

}

export default NavBar;