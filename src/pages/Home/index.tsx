import "./home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import Swiper core and required components
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="content_home">
        <div className="Home_container">
          <div className="swiper_content_app">
            <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                EffectFade,
                Autoplay,
              ]}
              effect="fade"
              spaceBetween={0}
              slidesPerView={1}
              navigation
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              className="full"
            >
              <SwiperSlide className="swiper_container-box_1">
                <div className="overlay">
                  <div className="img_content">
                    {/* <p className="title_type">
                        Servicios
                      </p> */}
                    <p className="title_overlay">
                      Expertos en Servicios de Exploración
                    </p>
                    <Link to="/servicios" className="button_header">
                      <button type="button">Más información</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper_container-box_4">
                <div className="overlay">
                  <div className="img_content">
                    <p className="title_overlay">
                      Expertos en Servicios de Exploración
                    </p>
                    <Link to="/servicios" className="button_header">
                      <button type="button">Más información</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper_container-box_2">
                <div className="overlay">
                  <div className="img_content">
                    <p className="title_overlay">
                      Expertos en Servicios de Exploración
                    </p>
                    <Link to="/servicios" className="button_header">
                      <button type="button">Más información</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper_container-box_3">
                <div className="overlay">
                  <div className="img_content">
                    <p className="title_overlay">
                      Expertos en Servicios de Exploración
                    </p>
                    <Link to="/servicios" className="button_header">
                      <button type="button">Más información</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="projects">
            <p className="project_title">Servicios destacados</p>
            <div className="project_count">
              <div className="project_box">
                <div className="project_img one">
                  <div className="project_img_content">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
                <div className="project_info">
                  <p className="project_info_title">
                    Trámite de Concesiones Mineras
                  </p>
                  <Link to="/servicios" className="project_plus">
                    ver más
                  </Link>
                </div>
              </div>
              <div className="project_box">
                <div className="project_img two">
                  <div className="project_img_content">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
                <div className="project_info">
                  <p className="project_info_title">
                    Trámite para la autorización de uso de propiedad superficial{" "}
                  </p>
                  <Link to="/servicios" className="project_plus">
                    ver más
                  </Link>
                </div>
              </div>
              <div className="project_box">
                <div className="project_img three">
                  <div className="project_img_content">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
                <div className="project_info">
                  <p className="project_info_title">
                    Mapeo Geológico, toma de muestras a escala regional{" "}
                  </p>
                  <Link to="/servicios" className="project_plus">
                    ver más
                  </Link>
                </div>
              </div>
              <div className="project_box">
                <div className="project_img four">
                  <div className="project_img_content">
                    <i className="fas fa-search"></i>
                  </div>
                </div>
                <div className="project_info">
                  <p className="project_info_title">
                    Mapeo Geológico, toma de muestras a escala local
                  </p>
                  <Link to="/servicios" className="project_plus">
                    ver más
                  </Link>
                </div>
              </div>
            </div>
            <div className="project_button">
              <Link to="/servicios">
                <button type="button">ver más servicios</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
