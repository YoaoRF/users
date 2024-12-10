import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProyectos } from "../api"; // Asegúrate de importar tu función de API
import "../styles/ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProyectos(); // Obtener todos los proyectos
        const foundProject = data.find((p) => p.id === parseInt(id)); // Buscar el proyecto por ID
        setProject(foundProject);
      } catch (error) {
        console.error("Error al obtener los datos del proyecto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!project) {
    return <div className="error">Proyecto no encontrado.</div>;
  }

  return (
    <div className="project-details-container">
      {/* Título del proyecto */}
      <h1 className="project-title">{project.titulo}</h1>

      {/* Contenedor principal */}
      <div className="project-content">
        {/* Imagen del proyecto */}
        <div className="project-image">
          <img
            src={project.imagen || "https://via.placeholder.com/300x200"} // Imagen por defecto
            alt={`Imagen del proyecto ${project.titulo}`}
            className="project-image-style"
          />
        </div>

        {/* Información del proyecto */}
        <div className="project-info-box">
          <h3>Información del Proyecto</h3>
          <p>
            <strong>Año y Semestre:</strong>{" "}
            {project.año
              ? `${project.año.año} - Semestre ${project.año.semestre}`
              : "No hay información"}
          </p>
          <p>
            <strong>Categoría:</strong>{" "}
            {project.categoria?.nombre || "No hay información"}
          </p>
          <p>
            <strong>Documento:</strong>{" "}
            {project.documento ? (
              <a
                href={project.documento}
                download // Este atributo permite la descarga directa del archivo
                className="download-link"
              >
                Descargar Documento
              </a>
            ) : (
              "No hay información"
            )}
          </p>
          <p>
            <strong>Video:</strong>{" "}
            {project.video ? (
              <video
                className="project-video"
                src={project.video}
                controls
                width="600"
              >
                Tu navegador no soporta la reproducción de video.
              </video>
            ) : (
              "No hay información"
            )}
          </p>
        </div>
      </div>

      {/* Descripción */}
      <div className="project-description">
        <h3>Descripción:</h3>
        <p>{project.descripcion || "No hay información disponible."}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
