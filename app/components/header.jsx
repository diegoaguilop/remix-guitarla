import { Link } from "@remix-run/react"
import Logo from "../../public/img/logo.svg"
import Navegacion from "./navegacion"

function Header() {

    return (
        <header className="header">
            <div className="contenedor barra">
                <div className="logo">
                    <Link to="/">
                        <img className="logo" src={Logo} alt="Imagen Logo"></img>
                    </Link>

                    <Navegacion />
                </div>
                
            </div>
        </header>
    )
}

export default Header