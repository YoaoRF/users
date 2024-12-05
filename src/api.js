import axios from 'axios';

// Crear instancia de Axios con baseURL
const api = axios.create({
  baseURL: 'https://api-proyecto-integrador.onrender.com/api/',
  headers: {
    // Añadir headers opcionales que podrían ayudar con CORS
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Método para obtener proyectos
export const getProyectos = async () => {
  try {
    const response = await api.get('proyectos/');
    return response.data; // Devuelve los datos directamente
  } catch (error) {
    // Manejamos errores de CORS o conexión
    if (error.response) {
      console.error('Error en la respuesta del servidor:', error.response);
    } else if (error.request) {
      console.error('Sin respuesta del servidor. Problema de CORS u otra causa:', error.request);
    } else {
      console.error('Error al configurar la solicitud:', error.message);
    }
    throw error; // Re-lanzar el error para que pueda ser manejado donde se llame
  }
};
