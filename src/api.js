import axios from 'axios';

// URL base de tu API en la nube
const API_BASE_URL = 'https://springtecsupvault.onrender.com';

// Función para obtener todos los proyectos
export const getProyectos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/proyectos`);
    return response.data; // Asegúrate de que `response.data` sea el formato esperado
  } catch (error) {
    console.error('Error al obtener los proyectos:', error);
    throw error;
  }
};

// Función para obtener todos los comentarios
export const getComentarios = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/comentarios`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los comentarios:', error);
    throw error;
  }
};

// Función para crear un comentario
export const crearComentario = async (comentario) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/comentarios`, comentario);
    return response.data; // La respuesta debe devolver el comentario creado
  } catch (error) {
    console.error('Error al crear el comentario:', error);
    throw error;
  }
};

// Puedes agregar más funciones según sea necesario (por ejemplo, PUT, DELETE)
