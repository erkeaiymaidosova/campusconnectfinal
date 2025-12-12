import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./Auth.css";

export default function Login() {
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = login(username, password);

    if (!res.success) {
      alert(res.message);
      return;
    }

    alert(`Добро пожаловать, ${res.user.fullName}!`);
  };

  return (
    <div className="auth-container">
      <h2>Вход</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
