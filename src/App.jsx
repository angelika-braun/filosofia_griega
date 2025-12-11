import Navbar from './components/Navbar'
import Introdución from "./components/Introducción";
import Tareas from './components/Tareas';
import TourWeb from './components/TourWeb';
import Evaluación from './components/Evaluación';
import Conclusiones from './components/Conclusiones';
import Contacto from './components/Contacto';
import Recursos from './components/Recursos';
import socratesImage from './assets/socrates.jpg';

import './App.css'


function App() {

  return (
    <div
      style={{
        backgroundImage: `url(${socratesImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        paddingTop: '80px'
      }}
    >
      <Navbar logo={socratesImage} />
      <div className="container mt-5">

      <Introdución />
      <Tareas />
      <TourWeb />
      <Evaluación />
      <Recursos />
      <Conclusiones />
      <Contacto />


      <a href="#" className="scroll-top-btn">
        ↑
      </a>
    
      </div>
    </div>
  )
}

export default App
