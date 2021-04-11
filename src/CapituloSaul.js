import './App.css';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Personaje({match}) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState()
    
    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://tarea-1-breaking-bad.herokuapp.com/api/characters/${
                match.params.char_id}`
        );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };
    
  return (
    <div> 
      <h3>Persona</h3>
      {/* <h3>{item.title}</h3>
      <h3>{item.season}</h3>
      <h3>{item.episode}</h3>
      <h3>{item.air_date}</h3>
      <h3>{item.characters}</h3> */}

    </div>
  );
}

export default Personaje;
