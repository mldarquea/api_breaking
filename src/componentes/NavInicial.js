import '../App.css';
import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

function NavInicial(){
    return(
        <nav>
            <ul className='nav_links'>
            <ReactBootStrap.Button href="Saul">Better Call Saul</ReactBootStrap.Button>
            <ReactBootStrap.Button href="Breaking">Breaking Bad</ReactBootStrap.Button>
            </ul>
        </nav>
    );


}

export default NavInicial;