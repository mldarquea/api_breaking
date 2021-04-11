import './App.css';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Temporadas_Saul() 
{
  const url = "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul"
  const [episodes, setEpisodes] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setEpisodes(responseJSON)
  }
  useEffect(() => {
    fetchApi()
    }, [])
  return (
    <div className="Temporadas_Saul">
    <header className="Temporadas_Saul-header">
    <h1>Episodios Better Call Saul</h1>
    <p></p>
    <ol>
    { !episodes ? '\n Cargando...' : 
    episodes.map((episode, index)=>{
      return (
      <div>
        <h3 key={index}>
         <Link to={`/episode/${episode.episode_id}`}>{episode.title } {episode.season} {episode.episode}  
         </Link>
        </h3>
      </div>
    )})        }
    </ol>
    </header>
  </div>
);
}

export default Temporadas_Saul;
