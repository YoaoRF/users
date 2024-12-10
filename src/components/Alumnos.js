import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa"; // Icono de persona
import "../styles/Alumnos.css"; // Asegúrate de tener el archivo CSS

const API_ALUMNOS = "https://springtecsupvault.onrender.com/alumnos";

const Alumnos = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    // Obtener los alumnos de la API
    axios.get(API_ALUMNOS)
      .then((response) => setAlumnos(response.data))
      .catch((error) =>
        console.error("Error al obtener los alumnos:", error.message)
      );
  }, []);

  // Agrupar alumnos por grupo y año
  const alumnosAgrupados = alumnos.reduce((acc, alumno) => {
    const grupoClave = `${alumno.grupo.nombre} - ${alumno.año.año}`;
    if (!acc[grupoClave]) {
      acc[grupoClave] = [];
    }
    acc[grupoClave].push(alumno);
    return acc;
  }, {});

  return (
    <div className="alumnos-container">
      <h2>Alumnos</h2>

      {/* Mostrar los alumnos agrupados */}
      {Object.keys(alumnosAgrupados).map((grupoClave) => (
        <div key={grupoClave} className="grupo">
          <h3>{grupoClave}</h3>
          <div className="alumnos-lista">
            {alumnosAgrupados[grupoClave].map((alumno) => (
              <div key={alumno.id} className="alumno">
                <FaUser className="alumno-icon" />
                <div className="alumno-info">
                  <p><strong>{alumno.nombre} {alumno.apellido}</strong></p>
                  <p>Grupo: {alumno.grupo.nombre} Sección: {alumno.seccion.nombre}</p>
                  <p>Año: {alumno.año.año} - Semestre: {alumno.año.semestre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alumnos;
