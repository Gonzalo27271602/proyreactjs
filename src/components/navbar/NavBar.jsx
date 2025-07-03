import "./navbar.css";
import metlogo from "../../assets/logo2.png";
import CartWidget from "../cartwidget/CartWidget";

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="navgral">
                <img src= {metlogo} width="100" height="100" alt="Logo MET" />
                <ul className="navlinks">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="servicios.html">Servicios</a></li>
                    <li><a href="productos.html">Productos</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </div>
            <div className="navcart">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;
