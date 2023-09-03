import '../App.css';
import Info from '../components/info/info';

function Categorias() {
    
    const categories = ['peliculas', 'musica', 'series','comida', 'hola']
    
    return (
        <div>
        <h1 className="titulo" >Categorias</h1>
        <main>
            <section className="top-data">
                <form>
                    <input type="text"/> 
                    <input type ="submit" value="Buscar"/>
                </form>
            </section>
            <h2>Canciones Populares</h2>
            <section className="general-data">
              {categories.map((category, i) => <Info key={i}></Info>)}
               
            </section>
            <h2>Personajes de películas</h2>
            <section className="card-container">
                
            </section>
        </main>
        </div>
    
      );
}

export default Categorias;