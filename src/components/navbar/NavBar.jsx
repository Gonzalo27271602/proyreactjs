import "./navbar.css";
import metlogo from "../../assets/logo2.png";
import CartWidget from "../cartwidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="navgral">
                <Link to="/">
                    <img src= {metlogo} width="100" height="100" alt="Logo MET" />
                </Link>
                <ul className="navlinks">
                    <li>
                        <Link to="/category/gas">Gas</Link>
                    </li>
                    <li>
                        <Link to="/category/aire">Aire</Link>
                    </li>
                    <li>
                        <Link to="/category/fueloil">Fuel Oil</Link>
                    </li>
                    <li>
                        <Link to="/category/programadores">Programadores</Link>
                    </li>
                    <li>
                        <Link to="/Category/quemadores">Quemadores</Link>
                    </li>
                </ul>
            </div>
            <div className="navcart">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;
