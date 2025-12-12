import "./LostItemCard.css";

export default function LostItemCard({ title, description, image, date, place }) {
  return (
    <div className="lost-card">
      {image && <img src={image} alt={title} className="lost-img" />}

      <div className="lost-info">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="lost-meta">
          <span>📅 {date}</span>
          <span>📍 {place}</span>
        </div>

        <button className="contact-btn">Это моя вещь!</button>
      </div>
    </div>
  );
}
