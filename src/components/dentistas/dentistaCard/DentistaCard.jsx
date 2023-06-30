import {  Link } from 'react-router-dom'

function DentistaCard(props) {
    return (
        <>
        {props.usuarios.map((usuario)=>(
                        <Link key={usuario.id} to={`dentista/${usuario.id}`}>
                            <li key={usuario.id}>
                                <header>
                                    <img src="/img/doctor.jpg" alt="imagenDoctor" />
                                </header>
                                <p>{usuario.name}</p>
                                <span>{usuario.username}</span>
                                <button onClick={()=>props.buttonClick(usuario.id)} className="button-destacado">
                                    Destacar
                                </button>
                            </li>
                        </Link>
                    ))}
        </>
    )
}

export default DentistaCard;