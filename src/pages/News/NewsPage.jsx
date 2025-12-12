import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";

export default function NewsPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [saved, setSaved] = useState(false); // состояние кнопки
  const { user, saveNews } = useAuth();

  useEffect(() => {
    api.getNews().then((items) => {
      const found = items.find((n) => n.id === Number(id));
      setNews(found || null);

      // Проверяем, сохранена ли новость
      if (user && found) {
        setSaved(user.savedNews?.includes(found.id) || false);
      }
    });
  }, [id, user]);

  if (!news) return <div style={{ padding: 20 }}>Новость не найдена...</div>;

  const handleSave = () => {
    if (!user) {
      alert("Чтобы сохранять новости, нужно войти!");
      return;
    }
    saveNews(news.id);       // сохраняем новость
    setSaved(true);          // сразу обновляем состояние кнопки
    alert("Новость сохранена в профиль!");
  };

  return (
    <div className="news-full-page" style={{ padding: "20px" }}>
      <h1>{news.title}</h1>

      {news.image && (
        <img
          src={news.image}
          alt={news.title}
          style={{ width: "100%", borderRadius: "10px", margin: "20px 0" }}
        />
      )}

      <p><b>Автор:</b> {news.author}</p>
      <p><b>Дата:</b> {news.date}</p>
      <p><b>Категория:</b> {news.category}</p>

      <p style={{ marginTop: "20px", fontSize: "18px", lineHeight: "1.6" }}>
        {news.fullText}
      </p>

      {user && (
        <button
          onClick={handleSave}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: saved ? "#ccc" : "#ffb400",
            border: "none",
            cursor: saved ? "default" : "pointer",
          }}
          disabled={saved}
        >
          {saved ? "Сохранено" : "⭐ Сохранить новость"}
        </button>
      )}
    </div>
  );
}
