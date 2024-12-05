import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí va la lógica de autenticación (puede ser un fetch a tu API)
    // Suponiendo que obtenemos una respuesta con el usuario autenticado
    const user = { email }; // Este es un ejemplo, tu respuesta debe contener más datos (token, id, etc.)

    // Guardamos al usuario en localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Establecemos el estado local en la app (si es necesario)
    setUser(user);

    // Redirigimos al "Banner" después del login
    navigate("/banner"); // Asegúrate de que esta ruta esté configurada correctamente en tu App.js
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
