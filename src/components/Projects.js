import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProyectos } from "../api"; // Importa la función desde api.js
import "../styles/Projects.css";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [yearFilter, setYearFilter] = useState(""); // No filtra por defecto
  const [categoryFilter, setCategoryFilter] = useState(""); // No filtra por defecto
  const [semesterFilter, setSemesterFilter] = useState(""); // No filtra por defecto
  const [sortOrder, setSortOrder] = useState(""); // No ordena por defecto
  const [showFilters, setShowFilters] = useState(false); // Estado para mostrar/ocultar filtros

  // Fetch de proyectos usando la función de la API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProyectos();
        setProjects(data);
        setFilteredProjects(data); // Mostrar todos los proyectos inicialmente
      } catch (error) {
        console.error("Error al cargar los proyectos:", error);
      }
    };

    fetchProjects();
  }, []);

  // Filtrar proyectos según los criterios seleccionados
  useEffect(() => {
    let filtered = [...projects];

    // Filtrar por Año (solo si hay filtro activo)
    if (yearFilter) {
      filtered = filtered.filter(
        (project) => project.año && project.año.año === parseInt(yearFilter)
      );
    }

    // Filtrar por Semestre (solo si hay filtro activo)
    if (semesterFilter) {
      filtered = filtered.filter(
        (project) => project.año && project.año.semestre === parseInt(semesterFilter)
      );
    }

    // Filtrar por Categoría (solo si hay filtro activo)
    if (categoryFilter) {
      filtered = filtered.filter(
        (project) => project.categoria && project.categoria.nombre === categoryFilter
      );
    }

    // Ordenar proyectos A-Z o Z-A
    if (sortOrder === "A-Z") {
      filtered = filtered.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (sortOrder === "Z-A") {
      filtered = filtered.sort((a, b) => b.titulo.localeCompare(a.titulo));
    }

    setFilteredProjects(filtered);
  }, [yearFilter, categoryFilter, semesterFilter, sortOrder, projects]);

  // Redirige al detalle del proyecto
  const handleViewDetails = (id) => {
    navigate(`/proyectos/${id}`);
  };

  return (
    <div className="projects-container">
      <h2 className="section-title">Explora Nuestros Proyectos</h2>

      {/* Botón para mostrar u ocultar filtros */}
      <button
        className="toggle-filters-button"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
      </button>

      {/* Mostrar filtros si showFilters es true */}
      {showFilters && (
        <div className="filters">
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">Todos los Años</option>
            <option value="2024">Año 2024</option>
            {/* Agrega más opciones de año según sea necesario */}
          </select>

          <select
            value={semesterFilter}
            onChange={(e) => setSemesterFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">Todos los Semestres</option>
            <option value="1">Semestre 1</option>
            <option value="2">Semestre 2</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">Todas las Categorías</option>
            <option value="Comunidad">Comunidad</option>
            <option value="IA">IA</option>
            <option value="Tecsup">Tecsup</option>
            <option value="Eventos">Eventos</option>
            <option value="Enseñanza">Enseñanza</option>
            {/* Agrega más opciones de categorías según sea necesario */}
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="filter-select"
          >
            <option value="">Sin Orden</option>
            <option value="A-Z">Ordenar A-Z</option>
            <option value="Z-A">Ordenar Z-A</option>
          </select>
        </div>
      )}

      {/* Renderización de proyectos */}
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              {/* Imagen del proyecto */}
              {project.imagen ? (
                <img
                  src={project.imagen}
                  alt={`Imagen del proyecto ${project.titulo}`}
                  className="project-image"
                />
              ) : (
                <div className="placeholder-image">Sin imagen</div>
              )}

              {/* Información del proyecto */}
              <div className="project-info">
                <h3 className="project-title">{project.titulo}</h3>
                <p className="project-description">
                  {project.descripcion
                    ? `${project.descripcion.slice(0, 100)}...`
                    : "Sin descripción disponible."}
                </p>
                <button
                  className="view-details-button"
                  onClick={() => handleViewDetails(project.id)}
                >
                  Ver Detalles
                </button>
              </div>

              {/* Enlace a GitHub */}
              {project.urlGithub && (
                <a
                  href={project.urlGithub}
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
