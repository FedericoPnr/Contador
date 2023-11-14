import './App.css';
import Boton from "./componentes/boton"
import Contador from './componentes/contador';
import freecodecamplogo from '../src/imagenes/freecodecamplogo.jpg'
import{ useState } from 'react'




function App() {

  const [numClics, setNumClics] = useState(0);
  const manejarClic= () => {
    setNumClics(numClics + 1);

  }

  const reiniciarContador = () =>{
   setNumClics(0);

  }


  return (
    <div className="App">
      <div className= 'freecodecamp-logo-contenedor'>

        <img 
        className='freecodecamplogo'
        src={freecodecamplogo}
        alt='Logo de free codecamp'
        />

      </div>
      <div 
      className='contenedor-principal'>
        <Contador
          numClics= {numClics}
        
        />
        <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}/>





          <Boton
           texto='Reiniciar'
           esBortonDeClic={false}
           manejarClic={reiniciarContador}/>
        

      </div>
    </div>
  );
}

export default App;
