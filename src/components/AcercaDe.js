import React from 'react';
import "../styles/AcercaDe.css";

const AcercaDe = () => {
  return (
    <div className="acerca-de-container">
      <div className="contenido">
        <h2>Acerca de Nosotros</h2>
        <p>
          En **Tecsup**, nos dedicamos a la formación técnica de alta calidad en diversas áreas
          de la ingeniería y la tecnología. Nuestro objetivo es brindar a nuestros estudiantes
          las herramientas necesarias para desarrollar soluciones innovadoras que mejoren la vida
          de las personas y de la industria en general.
        </p>
        <p>
          Ofrecemos una variedad de programas académicos que incluyen proyectos integradores,
          investigación aplicada, y capacitación en las últimas tecnologías. Contamos con un equipo
          docente altamente calificado y con alianzas con empresas líderes en la industria.
        </p>

        <h3>Ubicación</h3>
        <p>
          Nos encontramos en la sede de **Tecsup Santa Anita**, ubicada en:
          <br />
          <strong>Av. Cascanueces 2221, Lima 15011, Perú</strong>
        </p>
      </div>

      {/* Mapa de Google con la ubicación de Tecsup Santa Anita */}
      <div className="mapa-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.942497595512!2d-77.01321788537734!3d-12.054063711741508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105db1b920d7a7b%3A0xf2a37c53c59a2fc7!2sTecsup%20Santa%20Anita!5e0!3m2!1ses-419!2spe!4v1676042083360!5m2!1ses-419!2spe"
          width="100%" 
          height="400" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};

export default AcercaDe;
