import NavBar from "./../components/Navbar";
import Footer from "./../components/Footer";
import "./styles/layout.css";
// import MessengerCustomerChat from "react-messenger-customer-chat";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-global">
      <NavBar />

      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
