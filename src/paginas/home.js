import Nav from '../components/nav/nav'; 
import DataDetail from '../components/data-detail/data-detail';
import Category from '../components/category/category';
import '../App.css';
import Footer from '../components/footer/footer';
import Info from '../components/info/info';

function Home() {
    
    const categories = ['peliculas', 'musica', 'series','comida', 'hola']
const detalles = [
  {
    calle: 'cualquier cosa', 
    numero: '4356'
  },
  {
    calle: 'hola cosa', 
    numero: '1396'
  },
  {
    calle: 'cualqui', 
    numero: '6556'
  },
]
    
    return (
        <div>
          <Nav></Nav>
        <h1>Home</h1>
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
       <Footer/> 
        </div>
    
      );
}

export default Home;