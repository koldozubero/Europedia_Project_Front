import './Map.scss';
import imagenMapa from "./fondoMapa4.jpg"
import europaImg from "./europa.png"
import Areas from './Areas';
function Map() {
    return (
        <>
            <div className="mapContainersContainer" >
                <div className="mapContainer">
                    <img className='imagenEuropa' src={europaImg} useMap="#image-map" />
                    <map name="image-map">
                        <Areas />
                    </map>
                </div>
            </div>
            <div>
                <img className='imagenFondo' src={imagenMapa} />
            </div>
        </>

    )
}

export default Map;
