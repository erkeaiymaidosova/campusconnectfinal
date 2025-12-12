import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      
      {/* БАННЕР */}
      <section className="hero">
        <h1>Добро пожаловать в CampusConnect</h1>
        <p>Новости, события, объявления и всё, что важно студентам.</p>
        <Link to="/news" className="hero-btn">Перейти к новостям</Link>
      </section>

      {/* КАТЕГОРИИ */}
      <section className="categories">
        <h2>Популярные категории</h2>
        <div className="cat-grid">
          <Link className="cat-card" to="/news?category=university">Университет</Link>
          <Link className="cat-card" to="/news?category=events">События</Link>
          <Link className="cat-card" to="/lost-found">Бюро находок</Link>
          <Link className="cat-card" to="/profile">Профиль</Link>
        </div>
      </section>

      {/* ПОСЛЕДНИЕ НОВОСТИ — можно позже подключить API */}
      <section className="latest">
        <h2>Последние новости</h2>
        <div className="last-news-placeholder">
          Новости будут появляться здесь 🙂
        </div>
      </section>

    </div>
  );
}
