import React, { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./News.css";
import { api } from "../../services/api";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.getNews().then(setNews);
  }, []);

  return (
    <div className="news-page">
      <h2>Новости</h2>
      {news.map((item) => (
        <NewsCard
  key={item.id}
  id={item.id}               // <-- ВАЖНО!
  title={item.title}
  description={item.description}
  image={item.image}
  date={item.date}
  author={item.author}
  category={item.category}
/>

      ))}
    </div>
  );
}
