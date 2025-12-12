import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Главная</Link>
        <Link to="/news">Новости</Link>
        <Link to="/lost-found">Бюро находок</Link>


        <div className="auth-block">
          {user ? (
            <>
              <Link to="/profile" className="username">{user.username}</Link>
              <button onClick={logout} className="logout-btn">Выйти</button>
            </>
          ) : (
            <>
              <Link to="/login">Войти</Link>
              <Link to="/register">Регистрация</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
