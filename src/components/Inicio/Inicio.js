import './Inicio.scss';
import imagenInicio from "./europa1.jpg"
import { Link } from 'react-router-dom';
function Inicio() {
    return (
        <>
            <div>
                <div className='principio'>
                    <img src={imagenInicio} className="imagenInicio" />
                </div>
                <div className='principio2'>
                    <h1>Europedia</h1>
                </div>
                <div className='container'>
                <button className='btn1'><Link to="/paises">Ver mapa</Link></button>
                <button className='btn2'><Link to="/juego">Juego de banderas</Link></button>
                </div>
            </div>

        </>

    )
}

export default Inicio;