import '../App.css';
function Detalle() {
    
    const categories = ['peliculas', 'musica', 'series','comida', 'hola']
    
    return (
        <div>
        <h1 className="titulo" >Detalle</h1>
        <main>
            <section className="top-data">
                <div id="detalle">
                    <div>
                        <img src="https://www.cronista.com/files/image/500/500498/63ad823ff0a51.jpg"/>
                    </div>
                    <div>
                        <h2>Top Gun</h2>
                        <p>Calificacion: 8</p>
                        <p>13/08/2021</p>
                        <p>Duracion: 2 horas</p>
                        <p>Sinopsis: Un militar que ensena a otros militares a volar aviones</p>
                        <p>Genero: accion, suspenso, emocion</p>
                        <p> <button> Agregar a Favoritos</button></p>
                    </div>

                </div>
            </section>
        </main>
        </div>
    
      );
}

export default Detalle;