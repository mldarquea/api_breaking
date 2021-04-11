import './App.css';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


function Temporadas_Breaking() {
  const urlb = "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad"
  const [episodesb, setEpisodesb] = useState()
  const fetchApi = async () => {
    const responseb = await fetch(urlb)
    const responseJSONb = await responseb.json()
    setEpisodesb(responseJSONb)
  }
  useEffect(() => {
    fetchApi()
    }, [])

  const gotopage = (episode_id) => {
    window.location = `/episode/${episode_id}`
  }

  return (
    <div className="Temporadas_Breaking">
      <header className="Temporadas_Breaking-header">
      <h1>Episodios Breaking Bad</h1>
      <p></p>
      <ol>
      { !episodesb ? '\n Cargando...' : 
      episodesb.map((episodeb, index)=>{
        return (
        <div>
          <h3 key={index}>
           {/* <Link to={`/episode/${episodeb.episode_id}`}>{episodeb.title } {episodeb.season} {episodeb.episode}  
           </Link> */}
           <a onclick={gotopage(episodeb.episode_id) }>
           {episodeb.title } {episodeb.season} {episodeb.episode}
           </a>
          </h3>
        </div>
      )})        }
      </ol>
      </header>
    </div>
  );
}

export default Temporadas_Breaking;
