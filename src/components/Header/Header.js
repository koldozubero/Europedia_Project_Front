import { Link } from "react-router-dom";
import './Header.scss';
import imagenMapa from "./fondoMapa2.jpg"

function Header() {
    return (
        <>
        <header className="cabecera">
        <div className="divCabecera1">
            <h2>MAPA DE EUROPA</h2>
        </div>  
        <div className="divCabecera">
            <h4>Selecciona un pais en el mapa para ver su información</h4>
            <Link className="linkHeader" to={'/'}>Pantalla principal</Link>
        </div>
        {/* <div>
                <img className='imagenFondo' src={imagenMapa} />
        </div> */}
        </header>
        </>
    )
}

export default Header;