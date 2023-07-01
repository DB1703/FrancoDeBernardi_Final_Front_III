import { useState } from "react"
import Form from "./Form/Form";
import Card from "./Card/Card";

function Contacto() {
    const [persona, setPersona] = useState()

    function handleSubmit(persona) {
        setPersona(persona)
    }
  
    return (
        <>
        <div className="invisibleContainer">
            <p>Comunicate con nosotros</p>
        </div>
        <Form onSubmit={handleSubmit}/>
        
        {persona ? <Card name= {persona.name} email={persona.email}/> : null}
        </>
    )
}

export default Contacto;