import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Manejo del formulario de registro
  const handleRegister = (e) => {
    e.preventDefault();
    if (username && password) {
      // Guardar en localStorage (simulación de base de datos)
      localStorage.setItem("user", JSON.stringify({ username, password }));
      alert("Usuario registrado con éxito.");
      navigate("/login"); // Redirigir a login después de registrarse
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="auth-container">
      <h2>REGISTRARSE</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
      <p>Ya tienes cuenta? <button onClick={() => navigate('/login')}>Inicia sesión aquí</button></p>
    </div>
  );
};

export default Register;
