import './App.css';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function CapituloSaul({match}) {
  const [item, setItem] = useState({})  
  useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://tarea-1-breaking-bad.herokuapp.com/api/episodes/${
                match.params.episode_id}`
                );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };
  return (
    <div> 
      {item && <h3>{item[0].episode_id}</h3>}
      {item && <h3>{item[0].title}</h3>}
      <h3>{item.title}</h3>
      <h3>{item.season}</h3>
      <h3>{item.episode}</h3>
      <h3>{item.air_date}</h3>
      <h3>{item.characters}</h3>

    </div>
  );
}

export default CapituloSaul;
