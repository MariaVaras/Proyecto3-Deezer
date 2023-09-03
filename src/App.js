import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./paginas/home";
import Categorias from "./paginas/categorias";
import Detalle from "./paginas/detalle";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import NotFound from "./paginas/notfound"
function App() {
  //linea 11 el path significa la ruta de la pagina a la que voy a entrar//

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/categorias" element={<Categorias/>}/> 
        <Route path="/detalle/:id" element={<Detalle/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

    

  );
}

export default App;
