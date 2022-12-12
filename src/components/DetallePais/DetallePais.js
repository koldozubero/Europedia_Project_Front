import './DetallePais.scss';
function DetallePais({ paises, nombre }) {
    console.log(paises, nombre);
    return (
        paises !== undefined ?
            paises.map(pais => {
                // console.log(pais)
                if (pais.nombre === nombre) {
                    return (
                        <>
                            <div className="divUl">
                                <h3>Capital </h3>
                                {pais.capital}
                                <h3>Poblacion</h3> 
                                {pais.poblacion + " personas"}
                                <h3>Idiomas Oficiales</h3>
                                <ul>
                                    {pais.idiomas_oficiales.map((a, i) => {
                                        return <li key={i}>{a}</li>
                                    })}
                                </ul>
                                <h3>Curiosidades</h3>
                                <ol>
                                    {pais.datos_curiosos.map((a, i) => {
                                        return <li key={i}>{a}</li>
                                    })}
                                </ol>
                            </div>
                        </>
                    )
                }
            })
            : <></>
    )
}

export default DetallePais;