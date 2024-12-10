import React from "react";
import "../styles/QuienesSomos.css";

const QuienesSomos = () => {
  return (
    <div className="quienes-somos">
      <div className="header">
        <h1>Propósito de la Aplicación</h1>
      </div>
      <div className="content">
        <p>
          En <strong>Tecsup Vault</strong>, nos enfocamos en facilitar la gestión, almacenamiento y acceso a proyectos integradores de estudiantes y profesionales, brindando una plataforma segura y eficiente para preservar el trabajo académico.
        </p>
        <p>
          En un entorno donde los proyectos académicos y colaborativos son fundamentales para el desarrollo de habilidades, es esencial contar con una solución que permita centralizar, proteger y organizar estas contribuciones valiosas.
        </p>
        <p>
          Nos dirigimos a instituciones educativas y organizaciones que deseen contar con una herramienta fiable para gestionar proyectos integradores de estudiantes en diversas disciplinas, garantizando que sus trabajos estén accesibles en cualquier momento y lugar.
        </p>
        <p>
          Nuestro valor agregado se basa en ofrecer una plataforma intuitiva y personalizada que permite a cada institución gestionar sus proyectos integradores de manera eficiente, facilitando la evaluación y seguimiento por parte de los tutores.
        </p>
      </div>
      <div className="team">
        <h2>Personal</h2>
        <div className="team-members">
          <div className="team-member">Ochoa Cuenca, Orlando Fabio</div>
          <div className="team-member">Rodriguez Frias, Yoao Steve</div>
          <div className="team-member">Cesar Rafael Gonzales Tucto</div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
