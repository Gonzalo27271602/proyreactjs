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
                        <Link to="/Category/Gas">Gas</Link>
                    </li>
                    <li>
                        <Link to="/Category/Aire">Aire</Link>
                    </li>
                    <li>
                        <Link to="/Category/Fuel Oil">Fuel Oil</Link>
                    </li>
                    <li>
                        <Link to="/Category/Programadores">Programadores</Link>
                    </li>
                    <li>
                        <Link to="/Category/Quemadores">Quemadores</Link>
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
