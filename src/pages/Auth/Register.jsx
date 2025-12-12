import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./Auth.css";

export default function Register() {
  const { register } = useAuth();

  const [form, setForm] = useState({
    username: "",
    password: "",
    fullName: "",
    email: ""
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = register(form);

    if (!res.success) {
      alert(res.message);
      return;
    }

    alert("Регистрация успешна!");
  };

  return (
    <div className="auth-container">
      <h2>Регистрация</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Логин"
          value={form.username}
          onChange={onChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={form.password}
          onChange={onChange}
          required
        />

        <input
          type="text"
          name="fullName"
          placeholder="Ваше имя"
          value={form.fullName}
          onChange={onChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
          required
        />

        <button type="submit">Создать аккаунт</button>
      </form>
    </div>
  );
}
