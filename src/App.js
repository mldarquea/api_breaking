import './App.css';
import { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import NavInicial from './componentes/NavInicial';
import Temporadas_Saul from './Temporadas_Saul';
import Temporadas_Breaking from './Temporadas_Breaking';
import CapituloBreaking from './CapituloBreaking';
import CapituloSaul from './CapituloSaul';
import Personaje from './Personaje';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Componentes
import NavBar from './componentes/Navbar';


function App() {
  return (
    <div className="App">
      <NavBar />
        <Router>
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/breaking" exact component={Temporadas_Breaking}/>
          <Route path="/saul" exact component={Temporadas_Saul}/>
          <Route path="/episode/:episode_id" exact component={CapituloBreaking}/>
          <Route path="/episode/:episode_id" exact component={CapituloSaul}/>
          <Route path="/character/:char_id" exact component={CapituloSaul}/>
        </Switch>
        </Router>
        <div className="nav">
          <NavInicial/>
          </div>
    </div>
  ); 
}

const Home = () => (
  <div>
  </div>
);

export default App;
