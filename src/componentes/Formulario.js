import { useState } from "react";
import "../styles/Formulario.css";

const Formulario = ({addOrder}) => {
        const [nombre, setNombre] = useState("");
        const [telefono, setTelefono] = useState("");
        const [email, setEmail] = useState("");
        function createCliente () {
            const cliente = {nombre, telefono, email}
            addOrder(cliente);
        }
    return (
        <div>
            <h3 className="titulo-formulario">COMPLETA TUS DATOS</h3>
            <p className="sub-formulario">(obligatorio para acceder al link de compra)</p>
            <form className="contenedor-inputs">
                <input className="inputs" type="text" placeholder="Nombre y Apellido" onChange={e => setNombre(e.target.value)} required/>
                <input className="inputs" type="tel" placeholder="Teléfono" onChange={e => setTelefono(e.target.value)} required/>
                <input className="inputs" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required/>
                {nombre === "" || telefono === "" || email === ""?
                    <p></p>
                    :<button type="button" className="botonEnviar" onClick={createCliente}>TERMINAR COMPRA</button>
                }
            </form>
        </div>
    )
}

export default Formulario