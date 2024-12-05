import React from "react";
import "/Users/Steven/usuarios/fronted/src/styles/footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">
          {/* Información de Contacto */}
          <div className="contact-info">
            <p className="title-footer">Información de Contacto</p>
            <ul>
              <li>Teléfono: 123-456-7890</li>
              <li>Email: tecsup@.com</li>
            </ul>
            <div className="social-icons">
              <span className="social-icon facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </span>
              <span className="social-icon twitter">
                <i className="fa-brands fa-twitter"></i>
              </span>
              <span className="social-icon youtube">
                <i className="fa-brands fa-youtube"></i>
              </span>
              <span className="social-icon pinterest">
                <i className="fa-brands fa-pinterest-p"></i>
              </span>
              <span className="social-icon instagram">
                <i className="fa-brands fa-instagram"></i>
              </span>
            </div>
          </div>

          {/* Información */}
          <div className="information">
            <p className="title-footer">Información</p>
            <ul>
              <li><a href="#">Acerca de Nosotros</a></li>
            </ul>
          </div>

          {/* Boletín Informativo */}
          <div className="newsletter">
            <p className="title-footer">Boletín informativo</p>
            <div className="content">
              <p>Tratando de presentar el mejor proyecto.</p>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="copyright">
          <p>Desarrollado por Grupo5A &copy; 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
