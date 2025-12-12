import { Link } from "react-router-dom";
import "./NewsCard.css";

export default function NewsCard({ id, title, description, image, date, author, category }) {
  return (
    <div className="news-card">
      
      {image && <img src={image} alt={title} className="news-image" />}

      <div className="news-content">
        <span className="news-category">{category}</span>
        <h3>{title}</h3>

        <p className="news-desc">{description}</p>

        <div className="news-info">
          <span>{author}</span>
          <span>{date}</span>
        </div>

        {/* КНОПКА ПЕРЕХОДА НА ПОЛНУЮ НОВОСТЬ */}
        <Link to={`/news/${id}`} className="read-btn">
          Читать далее →
        </Link>
      </div>
    </div>
  );
}
