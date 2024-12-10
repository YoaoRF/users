import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Login from "./components/Login";
import Register from "./components/Register";
import QuienesSomos from "./components/QuienesSomos";
import axios from "axios";
import AcercaDe from "./components/AcercaDe";
import Alumnos from "./components/Alumnos";

function App() {
  const [projects, setProjects] = useState([]);
  const [anos, setAnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Verificar si el usuario está logueado al cargar la página
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser({ email: currentUser.email, name: currentUser.name });
    }
  }, []);

  // Obtener los proyectos
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("https://springtecsupvault.onrender.com");
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  // Obtener los años y semestres
  useEffect(() => {
    axios.get("https://api-proyecto-integrador.onrender.com/api/anos/")
      .then(response => {
        setAnos(response.data);  
        setLoading(false);  
      })
      .catch(error => {
        console.error("Error al obtener los años y semestres:", error);
        setLoading(false);
      });
  }, []);

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("currentUser"); // Limpiamos el localStorage
    setUser(null); // Limpiamos el estado del usuario
  };

  return (
    <Router>
      <Header user={user} setUser={setUser} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/quienes-somos" element={<QuienesSomos setUser={setUser} />} />
        <Route path="/alumnos" element={<Alumnos setUser={setUser} />} />
        <Route path="/Acerca" element={<AcercaDe setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        
        {/* Ruta protegida: Lista de proyectos */}
        <Route 
          path="/lista-proyectos" 
          element={user ? <Projects projects={projects} /> : <Navigate to="/login" />} 
        />

        {/* Ruta protegida: Detalle del proyecto */}
        <Route 
          path="/proyectos/:id" 
          element={user ? <ProjectDetails projects={projects} anos={anos} loading={loading} /> : <Navigate to="/login" />} 
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
