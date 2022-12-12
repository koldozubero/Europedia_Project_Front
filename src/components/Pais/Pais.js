import './Pais.scss';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import imagenMapa from "../Map/fondoMapa4.jpg"
import DetallePais from '../DetallePais/DetallePais';

function Pais() {
    let { nombre } = useParams()
    let [detalleShow, setDetalleShow] = useState(false)
    let [paises, setPaises] = useState(undefined)
    useEffect(() => {
        fetch('http://localhost:8000/paises')
            .then(res => res.json())
            .then(res => {
                if (res.message !== undefined) {
                    alert(res.message)
                } else {
                    // console.log(res);
                    setPaises(res)
                }
            })
    }, [])

    return (
        paises !== undefined ?
            paises.map(pais => {
                // console.log(pais)
                if (pais.nombre === nombre) {
                    return (
                        <>
                            <div className="divPais" style={{backgroundImage: `url(${imagenMapa})`}}>
                                <div className="paisContainer">
                                <div className='divPaisCont1'>
                                    <h3>{pais.nombre} <img className='bandera' src={`http://localhost:8000/${pais.bandera}`} /></h3>
                                    {!detalleShow && <button onClick={() => setDetalleShow(true)}>Saber mas...</button>}
                                </div>
                                <div className='divPaisCont2'>
                                    {detalleShow && <DetallePais paises={paises} nombre={nombre} />}
                                </div>
                                <div className='divPaisCont3'>
                                        <Link to={'/paises'}> Volver al mapa</Link>
                                    </div>
                                </div>
                                {/* <p>Idiomas oficiales: {pais.idiomas_oficiales}</p>
                        <p>Datos curiosos: {pais.datos_curiosos}</p> */}
                            </div>
                        </>
                    )
                }
            })
            : <></>
    )
}

export default Pais;