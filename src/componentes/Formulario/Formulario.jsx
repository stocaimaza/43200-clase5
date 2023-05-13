import {useState} from 'react'

/** EVENTOS CON EL FORMULARIO **/
//1) onSubmit

const Formulario = () => {
    //Creamos los estados:
    const [nombre, setNombre] = useState(""); 
    const [apellido, setApellido] = useState("");

    //Creamos el manejador del evento del formulario: 
    const handlerFormulario = (event) => {
        //Prevenimos la recarga de la página
        event.preventDefault();
        
        const nuevoCliente = {nombre, apellido};
        console.log(nuevoCliente);

        //event.target.value = ""; 
        //¿Por qué no funciona? Recuerden que acá el target hace referencia al formulario en su conjunto, y no a cada input. 

        setNombre("");
        setApellido("");

    }

  return (
    <form onSubmit={ handlerFormulario }>
        <label htmlFor="nombre"> Nombre </label>
        <input type="text" id='nombre' onChange={(e)=>setNombre(e.target.value)} value={nombre} />

        <label htmlFor="apellido"> Apellido </label>
        <input type="text" id='apellido' onChange={(e)=>setApellido(e.target.value)} value={apellido} />

        <button type='submit'> Enviar datos </button>

    </form>
  )
}

export default Formulario