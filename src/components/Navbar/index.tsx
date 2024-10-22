import { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../../images/bars-solid.svg";
import Close from "../../images/times-solid.svg";
import logoAle from "../../images/logo.png";
import "./navbar.css";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };
  return (
    <div>
      <div className="content_navbar">
        <div className="content-nav">
          <div className="logo">
            <NavLink to="/">
              <img src={logoAle} alt="" />
            </NavLink>
          </div>
          <div
            className="menu"
            style={{ paddingRight: 12 }}
            onClick={toggleMenu}
          >
            <img src={Menu} alt="" width="30" />
          </div>

          <ul style={styleMenu}>
            <li onClick={toggleMenu} className="navevent">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li onClick={toggleMenu} className="navevent">
              <NavLink to="/nosotros">Nosotros</NavLink>
            </li>
            <li onClick={toggleMenu} className="navevent">
              <NavLink to="/servicios">Servicios</NavLink>
            </li>
            <li onClick={toggleMenu} className="navevent">
              <NavLink to="/proyectos">Proyectos</NavLink>
            </li>
            <li onClick={toggleMenu} className="navevent">
              <NavLink to="/geoplay">GeoPlay</NavLink>
            </li>
            <li onClick={toggleMenu} className="navevent">
              <NavLink to="/cursos">Cursos</NavLink>
            </li>

            <li onClick={toggleMenu} className="navevent">
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
            <li onClick={toggleMenu}>
              <img src={Close} alt="" width="20" className="menu" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
