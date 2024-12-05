import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import axios from "axios"; 
import QuienesSomos from "./components/QuienesSomos";

function App() {
  const [projects, setProjects] = useState([]);
  const [anos, setAnos] = useState([]);  
  const [loading, setLoading] = useState(true);  

  // Obtener los proyectos
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("https://api-proyecto-integrador.onrender.com/api/proyectos/");
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

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/lista-proyectos" element={<Projects projects={projects} />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        
        {/* Ruta para el detalle del proyecto, usando el ID de la URL */}
        <Route 
          path="/proyectos/:id" 
          element={<ProjectDetails projects={projects} anos={anos} loading={loading} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
