import React, { useEffect, useState } from "react";
import { getProyectos } from "/Users/Steven/usuarios/fronted/src/api"; // Importamos nuestra función de la API
import "/Users/Steven/usuarios/fronted/src/styles/Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const [proyectos, setProyectos] = useState([]);
  const [randomProjects, setRandomProjects] = useState([]);

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
        <div className="projects">
          {randomProjects.length > 0 ? (
            randomProjects.map((project, index) => (
              <div key={index} className="project">
                <img
                  src={project.imagen || "/img/placeholder.jpg"} // Usar un placeholder si no hay imagen
                  alt={project.titulo || "Proyecto sin título"}
                />
                <p>{project.titulo || "No hay información"}</p>
              </div>
            ))
          ) : (
            <p>No hay proyectos disponibles</p>
          )}
        </div>
      </section>

      {/* Sección de proyectos */}
      <section className="projects-section">
        <h2>Mejores Proyectos</h2>
        <div className="filters">
          <button>Destacados</button>
          <button>Más Recientes</button>
          <button>Mejor Evaluados</button>
        </div>
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
