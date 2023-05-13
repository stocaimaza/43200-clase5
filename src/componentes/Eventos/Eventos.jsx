import { useState } from "react"
import './Eventos.css'

/*EVENTOS */
//Me permiten asociar funciones al comportamiento del usario. 

//Eventos más utilizados: 
//Click

const Eventos = () => {
    const [input, setInput] = useState("");

    //handler = manejador 
    const manejadorClick = () => {
        console.log("Click");
    }

    const manejadorInput = (event) => {
        //Voy a trabajar con el objeto "event"
        setInput(event.target.value);
        //La propiedad target es la referencia al objeto del DOM que dispara el evento. 
        console.log(input);

    }

  return (
    <div>
        <h2>Eventos más comunes</h2>
        <button onClick={ manejadorClick }> Haceme Click </button>

        <div className="caja"
            onMouseMove={()=> console.log("Nuevo evento")}
            onMouseEnter={()=> console.log("Entraste")} 
            onMouseLeave={()=> console.log("Saliste")} 
            >
        </div>

        <form>
            <h2>Formulario </h2>
            <label htmlFor="campo"> Ingrese texto </label>
            <input type="text" id="campo" 
                onChange={ manejadorInput }
                onKeyDown={()=> console.log("Presionaste una tecla")}
                onKeyUp={()=> console.log("Soltaste una tecla")}
            />
                
            
        </form>
    </div>
  )
}

export default Eventos