import { useEffect, useState } from "react";
import { api } from "../../services/api";
import "./LostFound.css";

export default function LostFound() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.getLostItems().then(setItems); // теперь работает корректно
  }, []);

  return (
    <div className="lostfound-container">
      <h2>Бюро находок</h2>
      {items.length === 0 ? (
        <p>Пока ничего не найдено.</p>
      ) : (
        <div className="lostfound-list">
          {items.map((item) => (
            <div key={item.id} className="lostfound-card">
              {item.image && <img src={item.image} alt={item.name} className="lostfound-image" />}
              <div className="lostfound-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="lostfound-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
