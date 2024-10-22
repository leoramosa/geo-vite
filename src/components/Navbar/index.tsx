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
          <div className="logo ">
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
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "current" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li onClick={toggleMenu} className="navevent">
              <NavLink
                to="/nosotros"
                className={({ isActive }) => (isActive ? "current" : "")}
              >
                Nosotros
              </NavLink>
            </li>
            <li onClick={toggleMenu} className="navevent">
              <NavLink
                to="/servicios"
                className={({ isActive }) => (isActive ? "current" : "")}
              >
                Servicios
              </NavLink>
            </li>
            <li onClick={toggleMenu} className="navevent">
              <NavLink
                to="/proyectos"
                className={({ isActive }) => (isActive ? "current" : "")}
              >
                Proyectos
              </NavLink>
            </li>
            <li onClick={toggleMenu} className="navevent">
              <NavLink
                to="/geoplay"
                className={({ isActive }) => (isActive ? "current" : "")}
              >
                GeoPlay
              </NavLink>
            </li>
            <li onClick={toggleMenu} className="navevent">
              <NavLink
                to="/cursos"
                className={({ isActive }) => (isActive ? "current" : "")}
              >
                Cursos
              </NavLink>
            </li>

            <li onClick={toggleMenu} className="navevent">
              <NavLink
                to="/contacto"
                className={({ isActive }) => (isActive ? "current" : "")}
              >
                Contacto
              </NavLink>
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
