import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/Users/Steven/usuarios/fronted/src/styles/Header.css"
const Header = ({ user, setUser }) => {
  const [searchInput, setSearchInput] = useState(""); // Input de búsqueda
  const navigate = useNavigate();

  // Manejo del formulario de búsqueda
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/lista-proyectos?search=${searchInput.trim()}`); // Redirige con el parámetro de búsqueda
      setSearchInput(""); // Limpiar el input después de buscar
    }
  };

  // Manejo del cierre de sesión
  const handleLogout = () => {
    setUser(null); // Limpiar el estado del usuario
    navigate("/"); // Redirigir a la página principal
    alert("Sesión cerrada correctamente."); // Notificación de cierre
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="navbar-logo">
          <Link to="/">TECSUP VAULT</Link>
        </h1>

        {/* Menú de navegación */}
        <nav className="navbar-menu">
          <ul className="menu-list">
            {/* Enlaces generales */}
            <li><Link to="/">INICIO</Link></li>
            <li><a href="/quienes-somos">QUIÉNES SOMOS?</a></li>
            <li><a href="#ia-proximos">I.A. PRÓXIMOS</a></li>
            <li><Link to="/lista-proyectos">LISTA DE PROYECTOS</Link></li>
            <li><a href="#blogs">MÁS BLOGS</a></li>

            {/* Condicional para usuario autenticado */}
            {!user ? (
              <>
                <li><Link to="/login">INICIAR SESIÓN</Link></li>
                <li><Link to="/register">REGISTRARSE</Link></li>
                <br></br>
              </>
            ) : (
              <>
                <li><span>Bienvenido, {user.name || "Usuario"}</span></li>
                <li>
                  <button onClick={handleLogout} className="logout-button">
                    CERRAR SESIÓN
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Barra de búsqueda */}
        <div className="navbar-search">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar proyectos..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className="search-button">Buscar</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
