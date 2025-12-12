import { useAuth } from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import "./Profile.css";

export default function Profile() {
  const { user, logout, removeSavedNews } = useAuth();
  const navigate = useNavigate();
  const [savedNews, setSavedNews] = useState([]);

  // Загружаем сохранённые новости
  useEffect(() => {
    if (user?.savedNews?.length > 0) {
      api.getNews().then((allNews) => {
        const filtered = allNews.filter((n) => user.savedNews.includes(n.id));
        setSavedNews(filtered);
      });
    } else {
      setSavedNews([]);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="profile-container">
        <h2>Вы не вошли в систему</h2>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleRemove = (id) => {
    removeSavedNews(id);
    setSavedNews((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="profile-container">
      <h2>Профиль пользователя</h2>

      <div className="profile-info">
        <p><b>Имя:</b> {user.fullName}</p>
        <p><b>Логин:</b> {user.username}</p>
        <p><b>Email:</b> {user.email}</p>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Выйти
      </button>

      <h3 style={{ marginTop: "30px" }}>Сохранённые новости</h3>
      {savedNews.length === 0 ? (
        <p>Вы пока ничего не сохранили.</p>
      ) : (
        <div className="saved-news-list">
          {savedNews.map((news) => (
            <div key={news.id} className="saved-news-card">
              <Link to={`/news/${news.id}`} className="saved-news-link">
                <h4>{news.title}</h4>
              </Link>
              <p>{news.description}</p>
              <button
                className="remove-btn"
                onClick={() => handleRemove(news.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
