import "./info.css";
function Info() {
    return (
        <div className= "info">
            <div>
                <img width="75px" src="https://lastfm.freetls.fastly.net/i/u/300x300/e142cc55c1431b10fd745b2fa760f28d.jpg"/>
            </div>
            <div>
                <h3>Maluma</h3>
                <p>Descripcion: Maluma y Messi </p>
                <button> Ver mas</button>
                <button>Ir a detalle</button>
            </div>
        </div>
  );
}

export default Info;