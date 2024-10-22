import { useAppContext } from "../../context/AppContext";
import "./services.css";
import { FaWhatsapp } from "react-icons/fa";

// Import Swiper React components

function Services() {
  const { services } = useAppContext();

  return (
    <>
      <div className="content_services">
        <div className="title-event">
          <div className="line_color"></div>
          <p>Nuestros servicios</p>
        </div>
        <div className="content-service-g">
          {services.map((service, i) => (
            <div key={i} className="row_service">
              <div className="row_title">
                <p className="detail-title">{service.name}</p>
              </div>

              <div className="content-button">
                <div className="content-bo">
                  <a
                    className="btn-whatsapp"
                    href={`https://api.whatsapp.com/send?phone=51995508944&text=${service.mensaje}${service.name}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button
                      className="button-whatsapp flex items-center "
                      type="button"
                    >
                      <FaWhatsapp className="mr-1" />
                      {service.buttontype}
                    </button>
                  </a>
                </div>
                {/* <div className="content-bt">
                          <Link className="detail-ver" to={`/servicios/${service.details}`} >ver más</Link>
                        </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
