import './App.css';
import Menu from './componentes/Menu/Menu';
import Home from './componentes/Home/Home';
import Computadoras from './componentes/Computadoras/Computadoras';
import Sillas from './componentes/Sillas/Sillas';
import Celulares from './componentes/Celulares/Celulares';
import Eventos from './componentes/Eventos/Eventos';
import Formulario from './componentes/Formulario/Formulario';
import Escuchadores from './componentes/Escuchadores/Escuchadores';

//React Router: es una librería de enrutamiento para React. 
//Nos permite navegar entre componentes sin tener que recargar la página. 

//¿Cómo la utilizamos? 
//1) Instalamos: npm install react-router-dom
//2) Importamos en nuestra App los siguientes componentes de la librería: BrowserRouter, Route y Routes. 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './componentes/TodoList/TodoList';

//BrowserRouter: envuelve todos los componentes de nuestra aplicación y habilita la navegación entre ellos. 
//Routes: define las rutas de navegacion. 
//Route: define una ruta en específico. 
//Importante! Tenemos que completar algunas prop, le vamos el pasar la prop "path" con la ruta a vincular. 

function App() {
  return (
    <>
     {
      /*
      <Eventos />
      <Formulario />
      <Escuchadores/>
      
      */
     }
     <TodoList/>
    
    
    
    
    </>
  );
}

export default App;


/*
      <h1>Enlaces</h1>
      <h2>Enlaces absolutos</h2>
      <p>Me conectan con una página externa</p>
      <a href="https://infobae.com" target='_blank'>Infobae</a>

      <h2>Enlaces Relativos</h2>
      <p>Me permiten coenctarme con secciones o páginas de mi mismo sitio web</p>
      <a href="">Home</a>

      
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/computadoras' element={<Computadoras />} />
        <Route path='/sillas/:id' element={<Sillas />} />
        <Route path='/celulares' element={<Celulares />} />
      </Routes>
    </BrowserRouter>


*/
