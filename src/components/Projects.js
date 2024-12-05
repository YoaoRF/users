import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "/Users/Steven/usuarios/fronted/src/styles/Projects.css"

const Projects = ({ projects }) => {
  const navigate = useNavigate();

  // Inicializa el estado con datos persistidos en `localStorage` o `projects`
  const [sortedProjects, setSortedProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : projects || [];
  });

  // Efecto para guardar datos en `localStorage` cada vez que cambien
  useEffect(() => {
    if (sortedProjects && sortedProjects.length > 0) {
      localStorage.setItem("projects", JSON.stringify(sortedProjects));
    }
  }, [sortedProjects]);

  const handleSort = (order) => {
    const sorted = [...sortedProjects].sort((a, b) => {
      if (order === "asc") return a.titulo.localeCompare(b.titulo);
      if (order === "desc") return b.titulo.localeCompare(a.titulo);
      return 0;
    });
    setSortedProjects(sorted);
  };

  const handleViewDetails = (id) => {
    navigate(`/proyectos/${id}`);
  };

  return (
    <div className="projects-container">
      <h2 className="section-title">Explora Nuestros Proyectos</h2>

      {/* Botones de filtro */}
      <div className="filter-buttons">
        <button className="filter-button" onClick={() => handleSort("asc")}>
          Ordenar A-Z
        </button>
        <button className="filter-button" onClick={() => handleSort("desc")}>
          Ordenar Z-A
        </button>
      </div>

      {/* Renderización de proyectos */}
      <div className="projects-grid">
        {sortedProjects.length > 0 ? (
          sortedProjects.map((project) => (
            <div className="project-card" key={project.id}>
              {project.imagen ? (
                <img
                  src={project.imagen}
                  alt={project.titulo}
                  className="project-image"
                />
              ) : (
                <div className="placeholder-image">Sin imagen</div>
              )}

              <div className="project-info">
                <h3 className="project-title">{project.titulo}</h3>
                <p className="project-description">
                  {project.descripcion.slice(0, 100)}...
                </p>
                <button
                  className="view-details-button"
                  onClick={() => handleViewDetails(project.id)}
                >
                  Ver Detalles
                </button>
              </div>

              {project.url_github && (
                <a
                  href={project.url_github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  Ver en GitHub
                </a>
              )}
            </div>
          ))
        ) : (
          <p className="no-projects-message">No hay proyectos para mostrar.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
