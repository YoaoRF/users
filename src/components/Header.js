import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Header.css";

const Header = ({ user, setUser }) => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú hamburguesa
  const navigate = useNavigate();

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value.trim()) {
      try {
        const response = await axios.get(
          `https://springtecsupvault.onrender.com/proyectos?titulo_like=${value.trim()}`
        );
        const filteredSuggestions = response.data.filter((project) =>
          project.titulo.toLowerCase().includes(value.trim().toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } catch (error) {
        console.error("Error al obtener sugerencias:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      const project = suggestions.find(
        (proj) =>
          proj.titulo.toLowerCase() === searchInput.trim().toLowerCase()
      );
      if (project) {
        navigate(`/proyectos/${project.id}`);
      } else {
        alert("Proyecto no encontrado. Por favor, verifica el nombre.");
      }
    }
    setSearchInput("");
    setSuggestions([]);
  };

  const handleSuggestionClick = (id) => {
    navigate(`/proyectos/${id}`);
    setSearchInput("");
    setSuggestions([]);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
    alert("Sesión cerrada correctamente.");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Cambiar texto por imagen */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="/img/logito.png"
              alt="TECSUP Vault"
              className="navbar-logo-image"
            />
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button 
          className="hamburger-button" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776; {/* Icono de hamburguesa */}
        </button>

        <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <ul className="menu-list">
            <li>
              <Link to="/">INICIO</Link>
            </li>
            <li>
              <a href="/alumnos">ALUMNOS</a>
            </li>
            <li>
              <a href="/quienes-somos">QUIÉNES SOMOS?</a>
            </li>
            <li>
              <a href="#ia-proximos">I.A. PRÓXIMOS</a>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/lista-proyectos">LISTA DE PROYECTOS</Link>
                </li>
                <li>
                  <a href="/Acerca">ACERCA DE</a>
                </li>
                <li>
                  <span>Bienvenido, {user.name || "Usuario"}</span>
                </li>
                <li>
                  <button onClick={handleLogout} className="logout-button">
                    CERRAR SESIÓN
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">INICIAR SESIÓN</Link>
                </li>
                <li>
                  <Link to="/register">REGISTRARSE</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        {user && (
          <div className="navbar-search">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                className="search-input"
                placeholder="Buscar proyectos..."
                value={searchInput}
                onChange={handleInputChange}
              />
              <button type="submit" className="search-button">
                Buscar
              </button>
            </form>
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((project) => (
                  <li
                    key={project.id}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(project.id)}
                  >
                    {project.titulo}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
