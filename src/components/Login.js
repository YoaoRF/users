import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Obtenemos los usuarios de LocalStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Validamos las credenciales
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      alert("Inicio de sesión exitoso.");
      setUser({ email: user.email, name: user.name }); // Guarda el estado del usuario
      localStorage.setItem("currentUser", JSON.stringify(user)); // Opcional: Guarda el usuario logueado
      navigate("/");
    } else {
      alert("Credenciales incorrectas. Intenta de nuevo.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-button">
            Iniciar Sesión
          </button>
        </form>
        <p>
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
