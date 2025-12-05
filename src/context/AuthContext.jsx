import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/client";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in (on app load)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Optional: validate token with backend
      // For now, just set as logged in
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    setUser({ token: data.token });
    return data;
  };

  const register = async (firstname, lastname, email, password) => {
    const { data } = await api.post("/auth/register", {
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      email: email.trim(),
      password,
    });
    // Auto-login after register
    await login(email, password);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);