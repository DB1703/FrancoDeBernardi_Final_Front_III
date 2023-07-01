import { useEffect, useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import '../dentistas/dentistas.css'
import DentistaCard from "../dentistas/dentistaCard/DentistaCard"

function Dentistas() {
    const [usuarios, setUsuarios] = useState([])


    async function handleUsuario() {
        const response = await(await fetch (`https://jsonplaceholder.typicode.com/users`)
        ).json()
        setUsuarios(response)
    }
    
    
    useEffect(()=>{
        handleUsuario()
    }, [])

    return(
        <>
            <h2>Nuestra Plantilla</h2>
            <section>
                <ul className="father">
                    <DentistaCard usuarios={usuarios} isDestacadoPage={false}/>
                </ul>
            </section>
            
        </>
    )
}

export default Dentistas;