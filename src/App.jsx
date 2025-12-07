import Navbar from './components/Navbar'
import Introdución from "./components/Introducción";
import Tareas from './components/Tareas';
import Proceso from './components/Proceso';
import Evaluación from './components/Evaluación';
import Conclusiones from './components/Conclusiones';
import Contacto from './components/Contacto';
import Recursos from './components/Recursos';


import './App.css'


function App() {

  return (
    <>
      <Navbar />
      <div className="container mt-5">

      <Introdución />
      <Tareas />
      <Proceso />
      <Evaluación />
      <Recursos />
      <Conclusiones />
      <Contacto />


      <a href="#" className="scroll-top-btn">
        ↑
      </a>
    
      </div>
    </>
  )
}

export default App
