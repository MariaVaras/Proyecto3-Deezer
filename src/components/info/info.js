import { Link, useParams } from "react-router-dom";
import "./info.css";
function Info() {
    const id= useParams()
    console.log (id)
    return (
        <div className= "info">
            <div>
                <img width="75px" src="https://www.cronista.com/files/image/500/500498/63ad823ff0a51.jpg"/>
            </div>
            <div>
                <h3>Top gun</h3>
                <p>Descripcion: Tom Crus </p>
                <button> Ver mas</button>
                <Link to={'/detalle/1'}> Ir a detalle</Link>
            </div>
        </div>
  );
}

export default Info;