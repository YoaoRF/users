import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para el usuario logeado

  // Base de datos simulada (temporal para este ejemplo)
  const dummyUser = {
    email: "test@example.com",
    password: "123456", // Contraseña correcta
  };

  const login = (email, password) => {
    // Verificar que el email y contraseña coincidan
    if (email === dummyUser.email && password === dummyUser.password) {
      setUser({ email }); // Guarda el usuario en el estado
      return true; // Éxito
    }
    return false; // Fallo
  };

  const logout = () => {
    setUser(null); // Limpia el usuario logeado
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
