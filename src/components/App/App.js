import logo from './logo.svg';
import './App.css';
import Map from '../Map/Map';
import Header from '../Header/Header';
import Pais from '../Pais/Pais';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from '../Inicio/Inicio';
import Juego from '../Juego/Juego';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/juego' element={<Juego/>}/>
          <Route path='/paises/:nombre' element={<><Pais /></>}/>
          <Route path='/paises' element={<><Header /><Map /></>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
