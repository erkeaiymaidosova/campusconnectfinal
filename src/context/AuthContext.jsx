import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("currentUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // ---------- LOGIN ----------
  const login = (username, password) => {
    const res = api.login(username, password);

    if (res.success) {
      setUser(res.user);
      localStorage.setItem("currentUser", JSON.stringify(res.user));
    }

    return res;
  };

  // ---------- REGISTER ----------
  const register = (userData) => {
    const res = api.registerUser(userData);

    if (res.success) {
      setUser(res.user);
      localStorage.setItem("currentUser", JSON.stringify(res.user));
    }

    return res;
  };

  // ---------- LOGOUT ----------
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  // ---------- СОХРАНЕНИЕ НОВОСТИ ----------
  const saveNews = (newsId) => {
    if (!user) return;

    if (user.savedNews?.includes(newsId)) return;

    const updatedUser = {
      ...user,
      savedNews: [...(user.savedNews || []), newsId],
    };

    setUser(updatedUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    // обновляем в базе всех юзеров
    const users = api.getUsers().map((u) =>
      u.username === user.username ? updatedUser : u
    );
    api.saveUsers(users);
  };

  // ---------- УДАЛЕНИЕ СОХРАНЁННОЙ НОВОСТИ ----------
  const removeSavedNews = (newsId) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      savedNews: user.savedNews.filter((id) => id !== newsId),
    };

    setUser(updatedUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    const users = api.getUsers().map((u) =>
      u.username === user.username ? updatedUser : u
    );
    api.saveUsers(users);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, saveNews, removeSavedNews }}
    >
      {children}
    </AuthContext.Provider>
  );
}
