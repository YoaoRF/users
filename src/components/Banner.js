import React, { useEffect, useState } from "react";
import { getProyectos } from "../api"; // Importamos nuestra función de la API
import "../styles/Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const [proyectos, setProyectos] = useState([]);
  const [randomProjects, setRandomProjects] = useState([]);

  // Fetch proyectos desde la API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProyectos(); // Obtenemos los proyectos desde la API
        setProyectos(data); // Guardamos todos los proyectos
        setRandomProjects(selectRandomProjects(data)); // Elegimos 3 proyectos aleatorios
      } catch (error) {
        console.error("Hubo un error al obtener los proyectos:", error);
      }
    };

    fetchProjects();
  }, []);

  // Función para seleccionar 3 proyectos aleatorios
  const selectRandomProjects = (projects) => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  return (
    <>
      {/* Banner principal */}
      <section className="banner">
        <div className="banner-content">
          <h2>Bienvenido a la plataforma</h2>
          <h1>
            Explora los <span>Proyectos Integradores</span>
          </h1>
          <Link to="/lista-proyectos">
            <button className="banner-button">Ver Proyectos</button>
          </Link>
        </div>
      </section>

      {/* Sección de categorías */}
      <section className="categories-section">
        <h2>Mejores Categorías</h2>
        <div className="categories">
          <div className="category">
            <img src="/img/Segenred.jpg" alt="Seguridad De La Red" />
            <div className="overlay">
              <h3>Seguridad De La Red</h3>
              <button>Ver más</button>
            </div>
          </div>
          <div className="category">
            <img src="/img/imagen3.jpg" alt="Seguridad De Los Datos" />
            <div className="overlay">
              <h3>Seguridad De Los Datos</h3>
              <button>Ver más</button>
            </div>
          </div>
          <div className="category">
            <img src="/img/imuyages.png" alt="Seguridad De Aplicaciones" />
            <div className="overlay">
              <h3>Seguridad De Aplicaciones</h3>
              <button>Ver más</button>
            </div>
          </div>
        </div>
      </section>

      {/* Te Podría Interesar */}
      <section className="te-podria-interesar">
        <h2 style={{ textAlign: "center" }}>Te podría interesar</h2>
        <div className="proyects-container">
          {randomProjects.length > 0 ? (
            randomProjects.map((project) => (
              <Link
                key={project.id}
                to={`/proyectos/${project.id}`}
                className="proyect-card"
              >
                <div className="proyect-card-content">
                  {/* Imagen del proyecto */}
                  <img
                    src={project.imagen || "/img/placeholder.jpg"} // Imagen por defecto si no hay
                    alt={project.titulo || "Proyecto sin título"}
                    className="proyect-card-image"
                  />

                  {/* Información del proyecto */}
                  <div className="proyect-card-info">
                    <h3 className="proyect-card-title">{project.titulo || "Sin título"}</h3>
                    <p className="proyect-card-description">
                      {project.descripcion?.slice(0, 60) || "Sin descripción"}...
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No hay proyectos disponibles</p>
          )}
        </div>
      </section>

      {/* Sección de proyectos */}
      <section className="projects-section">
      
        <div className="projects">
          <div className="project">
            <img src="/img/cangt.png" alt="Sistema de Gestión Escolar" />
            <p>Sistema de Gestión Escolar</p>
          </div>
          <div className="project">
            <img src="/img/laa.png" alt="Gestión de claves" />
            <p>Gestión de claves</p>
          </div>
          <div className="project">
            <img src="/img/lupota.jpg" alt="Monitoreo continuo" />
            <p>Monitoreo continuo de seguridad</p>
          </div>
          <div className="project">
            <img src="/img/alarma.png" alt="Alertas en tiempo real" />
            <p>Alertas en tiempo real</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
