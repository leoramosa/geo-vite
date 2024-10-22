import { useRoutes, BrowserRouter } from "react-router-dom";
import "./../../App.css";
import Home from "../Home";
import About from "../About";
import Servicios from "../Servicios";
import Game from "../Game";
import Projects from "../Projects";
import Course from "../Course";
import Contact from "../Contact";
import Layout from "../../components/Layout/Layout";
import { AppProvider } from "../../context/AppContext";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/nosotros", element: <About /> },
    { path: "/servicios", element: <Servicios /> },
    { path: "/proyectos", element: <Projects /> },
    { path: "/geoplay", element: <Game /> },
    { path: "/cursos", element: <Course /> },
    { path: "/contacto", element: <Contact /> },
  ]);

  return routes;
};

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
