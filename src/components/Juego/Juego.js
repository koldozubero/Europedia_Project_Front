import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Juego.scss';
import imagenMapa from "../Map/fondoMapa4.jpg"
function Juego() {
    let [cont, setCont] = useState(0)
    let [input, setInput] = useState("");
    let [juego, setJuego] = useState(undefined);
    let [fin, setFin] = useState(undefined);
    useEffect(() => {
        fetch('http://localhost:8000/paises')
            .then(res => res.json())
            .then(res => {
                if (res.message !== undefined) {
                    alert(res.message)
                } else {
                    let newJuego = []
                    for (let i = 0; i < 10; i++) {
                        let aleatorio = Math.floor(Math.random() * 44);
                        newJuego[i] = { quest: res[aleatorio], answer: undefined }
                    }
                    setJuego(newJuego)
                }
            })

    }, [])

    function siguiente() {
        let newJuego = [...juego]
        newJuego[cont].answer = (juego[cont].quest.nombre).toLowerCase() === input.toLowerCase() ? true : false
        setJuego(newJuego)
        setCont(cont + 1)
        setInput("")
        console.log(juego);
        if (cont === juego.length - 1) {
            let respuestasAcertadas = 0
            juego.forEach(j => {
                if (j.answer === true) {
                    respuestasAcertadas++;
                }
            });
            setFin(respuestasAcertadas)
        }
    }

    function KeyPressElement(e) {
        let key = e.key;
        if (key === "Enter") {
            console.log( "You pressed a key." )
            siguiente();
        }
            
    }
    

    function recargarPagina() {
        window.location.replace('');
    }

    return (
        <>

            {juego !== undefined && fin === undefined ?
                <>
                    <div className="divJuego" style={{ backgroundImage: `url(${imagenMapa})` }}>
                        <div className="divJuegoH4">
                            <h4 className="div">El juego consiste en acertar el pais por su bandera</h4>
                        </div>
                        <div className="fondoDegr">
                            <h5>Pregunta nº {cont + 1}</h5>
                            <div className="divJuego2">
                                <img className="imagenJuego" src={`http://localhost:8000/${juego[cont].quest.bandera}`} />
                            </div>
                            <div className="divJuego3">
                                <input type="text" onChange={(e) => setInput(e.target.value)} onKeyPress={(e)=>KeyPressElement(e)} value={input} />
                                <button onClick={siguiente}>Siguiente</button>
                            </div>

                            <div className="linkJuego">
                                <Link to={'/'}>Página principal</Link>
                            </div>

                            <div className="linkJuego">
                                <button onClick={recargarPagina}>Volver a empezar</button>
                            </div>
                        </div>
                    </div>
                </>
                : <></>}


            {fin !== undefined ?
                <>
                    <div className="divResult" style={{ backgroundImage: `url(${imagenMapa})` }}>
                        <h1>Respuestas correctas: {fin}/10</h1>
                        <div className="linkJuego">
                            <button onClick={recargarPagina}>Volver a empezar</button>
                        </div>
                    </div>


                </>
                : <></>}
        </>
    )

}

export default Juego;