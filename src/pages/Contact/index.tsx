import Form from "../../components/Forms/Form";
import "./contact.css";
import "../products/styles/styleSerOne.css";
export default function Contact() {
  return (
    <div className="content_service-detail">
      <div className="header-contact-1">
        <div className="header-content">
          <div className="overlay-contact">
            <div className="content-title">
              <p>Contacto</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-content">
        <Form />
      </div>
    </div>
  );
}
