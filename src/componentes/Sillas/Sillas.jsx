//useParams es un hook que nos permite acceder a los parámetros de las URL en los componentes funcionales. 

//ejemplo: https//cellshop.com/sillas/123
//Puedo obtener ese 123 que podría ser un id de un producto. 

//En el enrutado tenemos que incluir /:id

import { useParams } from 'react-router-dom';

const Sillas = () => {
    const { id } = useParams();
    //Obtengo el valor del parámetro y lo voy a desestructurar. 
    //Si lo quiero mostrar por consola: 
    console.log(id);
    return (
        <div>
            <h2>Sección Sillas Gamer (Son caras y re duras)</h2>
            <p>ID producto: {id} </p>
        </div>
    )
}

export default Sillas