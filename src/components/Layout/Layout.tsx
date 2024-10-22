import Footer from "../Footer";
import NavBar from "../Navbar";
import "./layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-global">
      <NavBar />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
