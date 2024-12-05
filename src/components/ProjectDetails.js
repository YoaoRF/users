import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import "/Users/Steven/usuarios/fronted/src/styles/ProjectDetails.css" 

const ProjectDetails = ({ projects, anos, loading }) => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(id));
    setProject(foundProject);
  }, [id, projects]); 

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!project) {
    return <div className="error">Proyecto no encontrado.</div>;
  }

  return (
    <div className="project-details-container">
      <div className="project-header">
        <h1 className="project-title">{project.titulo}</h1>
        <p className="project-category">{project.categoria.nombre}</p>
      </div>

      <div className="project-main">
        {/* Contenedor Flex con la imagen a la izquierda y la info a la derecha */}
        <div className="project-image">
          <img src={project.imagen} alt={project.titulo} />
        </div>

        <div className="project-info">
          <p className="project-description">{project.descripcion}</p>
          <div className="project-meta">
            <p><strong>Año:</strong> {project.año.año} - Semestre: {project.año.semestre}</p>
            <p><strong>GitHub:</strong> {project.url_github || 'No disponible'}</p>
            {project.documento && <a className="download-link" href={project.documento} target="_blank" rel="noopener noreferrer">Descargar Documento</a>}
            {project.video && <iframe className="project-video" src={project.video} title="Video de producto" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

