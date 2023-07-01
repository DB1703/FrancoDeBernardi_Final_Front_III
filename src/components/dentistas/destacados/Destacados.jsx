import { useState, useEffect } from 'react';
import DentistaCard from '../dentistaCard/DentistaCard';
import './destacados.css'


function Destacados() {
    const [favs, setFavs] = useState([]);
  
    useEffect(() => {
      const favsFromLocalStorage = JSON.parse(localStorage.getItem('favs')) || [];
      setFavs(favsFromLocalStorage);
    }, []);
  
    return (
      <>
        <div className="invisibleContainer">
          <p>Doctores Destacados</p>
        </div>
        <ul className='father'>
          <DentistaCard usuarios={favs} isDestacadoPage={true}/>
        </ul>
      </>
    )
  }
  
  export default Destacados;
