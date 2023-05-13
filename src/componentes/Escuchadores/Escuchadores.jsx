//También podemos utilizar los "event listener". 
//Trabajamos con el objeto window que representa a la ventana del navegador. 

const Escuchadores = () => {
    //Llamamos al objeto Global window y al método addEventListener.
    //Generalmente los usamos en un useEffect.

    window.addEventListener("resize", ()=>console.log("Cambiaste el tamaño"));

    window.addEventListener("click", ()=>console.log("Hiciste click en cualquier lado"));
    
  return (
    <div>Escuchadores</div>
  )
}

export default Escuchadores