import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../detalle/detalle.css'

function Detalle() {
    const [dentista, setDentista] = useState()
    const params = useParams()

    async function handleDentista(param) {
        const response = await(fetch(`https://jsonplaceholder.typicode.com/users/${param}`))

        const data = await response.json();
        setDentista(data)
    } 
    
    //console.log(params);
    
    useEffect(() => {
        handleDentista(params.id)
    },[])

    
    return (
        <>
            {dentista && (
                <>
                    <div className="invisibleContainer">
                        <p>Doctor Número: {dentista.id}</p>
                    </div>
                    <li key={dentista.id}>
                        <header>
                            <img src="/img/doctor.jpg" alt="imagenDoctor" />
                        </header>
                        <p>{dentista.name}</p>
                        <span>{dentista.username}</span>
                        <span>{dentista.email}</span>
                        <span>{dentista.phone}</span>
                        <span> {dentista.address.city}, {dentista.address.street}</span>
                        <button onClick={()=>props.buttonClick(dentista.id)} className="button-destacado">
                            Destacar
                        </button>
                    </li>

                </>    
            )}
        </>
    )
}

export default Detalle;